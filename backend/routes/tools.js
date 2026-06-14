const express = require("express");
const router = express.Router();

const tools = require("../data/tools");

router.get("/", (req, res) => {
  const allTools = Object.values(tools).flat();

  res.json(allTools);
});

module.exports = router;