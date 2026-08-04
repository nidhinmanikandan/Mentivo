const Tool = require("../models/Tool");
const officialWebsiteResolver = require("./officialWebsiteResolver");

async function runResolver() {
  console.log("Running Website Resolver...");

  const tools = await Tool.find({
    $or: [
      { resolved: false },
      { resolved: { $exists: false } },
    ],
  });

  for (const tool of tools) {
    await officialWebsiteResolver(tool);
  }

  console.log("Website Resolver Finished.");
}

module.exports = runResolver;