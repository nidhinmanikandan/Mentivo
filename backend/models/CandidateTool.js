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

    githubUrl: String,

    githubStars: {
      type: Number,
      default: 0,
    },

    githubForks: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("CandidateTool", CandidateToolSchema);
