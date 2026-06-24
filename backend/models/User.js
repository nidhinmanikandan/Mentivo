const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  role: {
    type: String,
    default: "Frontend Developer",
  },

  targetRole: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("User", userSchema);