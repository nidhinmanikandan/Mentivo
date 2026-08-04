const mongoose = require("mongoose");

const CandidateToolSchema = new mongoose.Schema(
  {
    name: String,
    description: String,

    officialUrl: String,

    logoDomain: String,

    tags: [String],

    platform: String,

    source: String,

    validationStatus: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "CandidateTool",
  CandidateToolSchema
);