const express = require("express");
const router = express.Router();

const Roadmap = require("../models/Roadmap");
const generateRoadmap = require("../services/aiRoadmapRecommendation");

router.post("/", async (req, res) => {
  try {
    const { tool } = req.body;

    if (!tool?.name) {
      return res.status(400).json({
        error: "Tool is required",
      });
    }

    const cached = await Roadmap.findOne({
      toolName: tool.name,
    });

    if (cached) {
      console.log("Serving cached roadmap");
      return res.json(cached.roadmap);
    }

    console.log("Generating roadmap with Gemini...");

    const roadmap = await generateRoadmap(tool);

    await Roadmap.create({
      toolName: tool.name,
      roadmap,
    });

    res.json(roadmap);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Roadmap generation failed",
    });
  }
});

module.exports = router;