const express = require("express");
const router = express.Router();

const Tool = require("../models/Tool");

router.get("/", async (req, res) => {
  try {
    const tools = await Tool.find().sort({ name: 1 });

    res.json(tools);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Failed to fetch tools",
    });
  }
});

module.exports = router;