const express = require("express");
const router = express.Router();

const analyzeSkills =
  require("../services/skillAnalyzer");

router.post("/", (req, res) => {

    const { currentSkills, targetRole } =
      req.body;

    const analysis =
      analyzeSkills(currentSkills, targetRole);

    if (analysis.error) {
        return res.status(404).json(analysis);
    }

    const nextSkill =
      analysis.nextSkill;

    if (!nextSkill) {
        return res.json({
            message:
            "Congratulations! Roadmap completed."
        });
    }

    res.json({

        goal: targetRole,

        nextSkill: nextSkill.skill,

        difficulty:
          nextSkill.difficulty,

        estimatedTime:
          nextSkill.duration,

        resources:
          nextSkill.resources

    });

});

module.exports = router;