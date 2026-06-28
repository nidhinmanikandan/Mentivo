const User = require("../models/User");
const express = require("express");

const router = express.Router();

const { saveProfile, getProfile } = require("../services/profileService");

router.get("/", (req, res) => {
  res.json(getProfile());
});

router.get("/:userId", async (req, res) => {
  const profile = await User.findOne({
    userId: req.params.userId,
  });

  res.json(profile);
});

router.post("/", async (req, res) => {
  const { userId, role, interest, level } = req.body;

  let profile = await User.findOne({ userId });

  if (profile) {
    profile.role = role;
    profile.interest = interest;
    profile.level = level;
    await profile.save();
  } else {
    profile = await User.create({
      userId,
      role,
      interest,
      level,
    });
  }

  res.json(profile);
});

module.exports = router;
