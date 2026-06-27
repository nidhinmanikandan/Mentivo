const express = require("express");
const router = express.Router();

const toolRoadmaps = require("../data/toolRoadmaps");

console.log("Loaded data:");
console.log(toolRoadmaps);
console.log("Keys:", Object.keys(toolRoadmaps));

router.get("/:toolName", (req, res) => {
  const { toolName } = req.params;

  console.log("Requested:", toolName);

  const tool = toolRoadmaps[toolName];

  if (!tool) {
    return res.status(404).json({
      error: "Tool not found",
    });
  }

  res.json(tool);
});

module.exports = router;
