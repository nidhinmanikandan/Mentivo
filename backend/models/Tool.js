const mongoose = require("mongoose");

const ToolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    category: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    officialUrl: {
      type: String,
      default: "",
    },

    logoDomain: {
      type: String,
      default: "",
    },

    tags: {
      type: [String],
      default: [],
    },

    platform: {
      type: String,
      default: "",
    },

    isTrending: {
      type: Boolean,
      default: false,
    },

    source: {
      type: String,
      required: true,
    },

    searchKeywords: {
      type: [String],
      default: [],
    },


    features: {
      type: [String],
      default: [],
    },

    pricing: String,

    logo: String,

    enriched: {
      type: Boolean,
      default: false,
    },

    officialWebsite: {
      type: String,
      default: "",
    },

    documentationUrl: {
      type: String,
      default: "",
    },

    resolved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Tool", ToolSchema);
