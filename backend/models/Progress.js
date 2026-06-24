const Progress = require("../models/Progress");
const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  tool: {
    type: String,
    required: true,
  },

  completedSkills: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("Progress", progressSchema);