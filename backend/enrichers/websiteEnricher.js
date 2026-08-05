const axios = require("axios");
const cheerio = require("cheerio");

const Tool = require("../models/Tool");

module.exports = async function websiteEnricher() {
  console.log("Enriching websites...");

  const tools = await Tool.find({
    enriched: false,
    officialUrl: { $exists: true, $ne: "" },
  });

  for (const tool of tools) {
    try {
      const { data } = await axios.get(tool.officialUrl, {
        timeout: 10000,
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      });

      const $ = cheerio.load(data);

      const title = $("title").text().trim();

      const description =
        $('meta[name="description"]').attr("content") || "";

      const logo =
        $('link[rel="icon"]').attr("href") ||
        $('link[rel="shortcut icon"]').attr("href") ||
        "";

      tool.description = description || tool.description;

      tool.logo = logo;

      tool.enriched = true;

      await tool.save();

      console.log(`Enriched: ${tool.name}`);
    } catch (err) {
      console.log(`Failed: ${tool.name}`);
    }
  }

  console.log("Website enrichment complete.");
};