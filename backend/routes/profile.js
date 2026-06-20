const express = require("express");

const router = express.Router();

const { saveProfile, getProfile } = require("../services/profileService");

router.get("/", (req, res) => {
  res.json(getProfile());
});

router.post("/", (req, res) => {
  const { role, interest, level } = req.body;

  const profile = saveProfile(role, interest, level);

  res.json(profile);
});

module.exports = router;
