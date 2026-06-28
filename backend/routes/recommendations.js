const express = require("express");
const router = express.Router();

const User = require("../models/User");
const tools = require("../data/tools");

router.get("/", async (req, res) => {
  try {
    const profile = await User.findOne({ userId: 1 });

    if (!profile) {
      return res.json([]);
    }

    const recommendations = tools[profile.role] || [];

    res.json(recommendations);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;