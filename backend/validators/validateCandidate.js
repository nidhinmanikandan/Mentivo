const CandidateTool = require("../models/CandidateTool");
const Tool = require("../models/Tool");

async function validateCandidate(candidate) {
  // Ignore invalid candidates
  if (!candidate.name || !candidate.officialUrl) {
    console.log(`Rejected: ${candidate.name}`);
    return;
  }

  // Already exists?
  const exists = await Tool.findOne({
    name: candidate.name,
  });

  if (exists) {
    console.log(`Already exists: ${candidate.name}`);

    await CandidateTool.updateOne(
      { _id: candidate._id },
      {
        validationStatus: "duplicate",
      }
    );

    return;
  }

  // Save into Tool database
  await Tool.create({
    name: candidate.name,
    category: candidate.category,
    description: candidate.description,
    officialUrl: candidate.officialUrl,
    logoDomain: candidate.logoDomain,
    tags: candidate.tags,
    platform: candidate.platform,
    isTrending: candidate.isTrending,
    source: candidate.source,
  });

  await CandidateTool.updateOne(
    { _id: candidate._id },
    {
      validationStatus: "validated",
    }
  );

  console.log(`Validated: ${candidate.name}`);
}

module.exports = validateCandidate;