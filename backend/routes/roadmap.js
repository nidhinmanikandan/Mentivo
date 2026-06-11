const express = require("express");
const router = express.Router();

const users = require("../data/users");
const careers = require("../data/careers");

router.get("/:userId", (req, res) => {
  const userId = Number(req.params.userId);

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({
      error: "User not found",
    });
  }

  const roadmap = careers[user.targetRole];

  const roadmapWithStatus = roadmap.map((item) => ({
    skill: item.skill,
    completed: user.completedSkills.includes(item.skill),
    difficulty: item.difficulty,
    duration: item.duration,
    priority: item.priority,
  }));

  res.json({
    targetRole: user.targetRole,
    roadmap: roadmapWithStatus,
  });
});

module.exports = router;