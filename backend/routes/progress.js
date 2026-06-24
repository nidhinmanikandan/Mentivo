const Progress = require("../models/Progress");
const User = require("../models/User");

const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { tool, completedSkills } = req.body;

    const user = await User.findOne(); //Temporary

    const progress = await Progress.findOneAndUpdate(
      {
        userId: user._id,
        tool,
      },
      {
        userId: user._id,
        tool,
        completedSkills,
      },
      {
        upsert: true,
        new: true,
      },
    );

    res.json(progress);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to save progress",
    });
  }
});

router.get("/tool/:toolName", async (req, res) => {
  try {
    const { toolName } = req.params;

    const user = await User.findOne();

    const progress = await Progress.findOne({
      userId: user._id,
      tool: toolName,
    });

    res.json({
      completedSkills: progress?.completedSkills || [],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to load progress",
    });
  }
});

router.get("/:id", (req, res) => {
  const userId = Number(req.params.id);

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({
      error: "User not found",
    });
  }

  res.json(user);
});

router.post("/update", (req, res) => {
  const { userId, skill } = req.body;

  const updatedUser = addCompletedSkill(userId, skill);

  if (!updatedUser) {
    return res.status(404).json({
      error: "User not found",
    });
  }

  res.json({
    message: "Skill added successfully",
    user: updatedUser,
  });
});

router.post("/career", (req, res) => {
  const { userId, targetRole } = req.body;

  const updatedUser = changeCareer(userId, targetRole);

  if (!updatedUser) {
    return res.status(404).json({
      error: "User not found",
    });
  }

  res.json({
    message: "Career changed",
    user: updatedUser,
  });
});

module.exports = router;
