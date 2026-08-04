const CandidateTool = require("../models/CandidateTool");
const validateCandidate = require("./validateCandidate");

async function runValidation() {
  console.log("Running validator...");

  const candidates = await CandidateTool.find({
    validationStatus: "pending",
  });

  for (const candidate of candidates) {
    await validateCandidate(candidate);
  }

  console.log("Validation complete.");
}

module.exports = runValidation;