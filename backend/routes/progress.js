const express = require("express");
const router = express.Router();

const {
  getUserProgress,
  addCompletedSkill,
} = require("../services/progressTracker");

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

module.exports = router;
