const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },

  role: {
    type: String,
    default: "",
  },

  interest: {
    type: String,
    default: "",
  },

  level: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("User", userSchema);