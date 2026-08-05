const Tool = require("../models/Tool");
const websiteEnricher = require("./websiteEnricher");

async function runEnrichment() {
  console.log("Running Website Enrichment...");

  await websiteEnricher();

  console.log("Website Enrichment Finished.");
}

module.exports = runEnrichment;