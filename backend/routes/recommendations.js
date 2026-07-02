const express = require("express");

const router = express.Router();

const recommendTools = require("../services/aiRecommendation");

const User = require("../models/User");

const profile = await User.findOne({ userId: 1 });

router.get("/", async (req, res) => {
  try {
    const profile = getProfile();

    const tools = await recommendTools(profile);

    res.json(tools);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: "AI recommendation failed",
    });
  }
});

module.exports = router;
