const express = require("express");
const router = express.Router();

const analyzeSkills =
  require("../services/skillAnalyzer");

router.post("/analyze", (req, res) => {

  const {
    currentSkills,
    targetRole
  } = req.body;

  const result =
    analyzeSkills(currentSkills, targetRole);

  res.json(result);
});

module.exports = router;