const express = require("express");
const router = express.Router();

const toolRoadmaps =
  require("../data/toolRoadmaps");

router.get("/:toolName", (req, res) => {

  const { toolName } = req.params;

  const roadmap =
    toolRoadmaps[toolName];

  if (!roadmap) {
    return res.status(404).json({
      error: "Tool roadmap not found",
    });
  }

  res.json({
    tool: toolName,
    roadmap,
  });

});

module.exports = router;