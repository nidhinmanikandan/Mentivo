const userProfile = require("../data/userProfile");

function saveProfile(role, interest, level) {
  userProfile.role = role;
  userProfile.interest = interest;
  userProfile.level = level;

  return userProfile;
}

function getProfile() {
  return userProfile;
}

module.exports = {
  saveProfile,
  getProfile,
};
