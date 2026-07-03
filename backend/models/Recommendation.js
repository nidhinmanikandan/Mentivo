const mongoose = require("mongoose");

const RecommendationSchema = new mongoose.Schema(
  {
    userId: Number,

    tools: [
      {
        name: String,
        category: String,
        description: String,
        officialUrl: String,
        logoDomain: String,
        isTrending: Boolean,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Recommendation",
  RecommendationSchema
);