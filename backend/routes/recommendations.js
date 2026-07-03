const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Recommendation = require("../models/Recommendation");
const recommendTools = require("../services/aiRecommendation");

router.get("/", async (req, res) => {
  try {
    const userId = 1;

    // Check cache
    const cached = await Recommendation.findOne({ userId });

    if (cached) {
      console.log("Serving cached recommendations");
      return res.json(cached.tools);
    }

    console.log("Generating recommendations with Gemini...");

    const profile = await User.findOne({ userId });

    if (!profile) {
      return res.status(404).json({
        error: "Profile not found",
      });
    }

    const tools = await recommendTools(profile);

    await Recommendation.create({
      userId,
      tools,
    });

    res.json(tools);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Recommendation failed",
    });
  }
});

module.exports = router;