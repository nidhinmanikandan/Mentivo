const Tool = require("../models/Tool");

async function officialWebsiteResolver(tool) {
  // GitHub homepage already available
  if (
    tool.officialUrl &&
    !tool.officialUrl.includes("github.com")
  ) {
    await Tool.updateOne(
      { _id: tool._id },
      {
        officialWebsite: tool.officialUrl,
        resolved: true,
      }
    );

    console.log(`Resolved: ${tool.name}`);

    return;
  }

  // Placeholder for future search
  console.log(`Cannot resolve: ${tool.name}`);
}

module.exports = officialWebsiteResolver;