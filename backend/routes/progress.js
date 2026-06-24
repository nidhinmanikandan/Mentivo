const Progress = require("../models/Progress");

const express = require("express");
const router = express.Router();

const users = require("../data/users");

const {
  getUserProgress,
  addCompletedSkill,
  changeCareer,
} = require("../services/progressTracker");

router.post("/", async (req, res) => {
  try {
    const { tool, completedSkills } = req.body;

    await Progress.findOneAndUpdate(
      { tool },
      { completedSkills },
      { upsert: true, new: true },
    );

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/tool/:toolName", async (req, res) => {
  try {
    const { toolName } = req.params;

    const progress = await Progress.findOne({
      tool: toolName,
    });

    res.json({
      completedSkills: progress?.completedSkills || [],
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
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
