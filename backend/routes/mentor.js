const express = require("express");
const router = express.Router();

const analyzeSkills = require("../services/skillAnalyzer");

router.post("/", (req, res) => {
  const { currentSkills, targetRole } = req.body;

  const analysis = analyzeSkills(currentSkills, targetRole);

  if (analysis.error) {
    return res.status(404).json(analysis);
  }

  const nextSkill = analysis.nextSkill;

  if (!nextSkill) {
    return res.json({
      message: "Congratulations! Roadmap completed.",
    });
  }

  let why = "";
  if (nextSkill.skill === "React") {
    why =
      "React is one of the most demanded frontend frameworks used by modern companies.";
  }

  if (nextSkill.skill === "Figma") {
    why =
      "Figma is the industry standard design tool used by most UI/UX teams.";
  }

  if (nextSkill.skill === "Flutter") {
    why =
      "Flutter allows developers to build Android and iOS applications from one codebase.";
  }

  res.json({
    goal: targetRole,

    nextSkill: nextSkill.skill,

    difficulty: nextSkill.difficulty,

    estimatedTime: nextSkill.duration,

    resources: nextSkill.resources,

    why: nextSkill.why,
  });
});

module.exports = router;
