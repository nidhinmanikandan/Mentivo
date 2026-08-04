const githubSearchCollector = require("./githubSearchCollector");
const npmCollector = require("./npmCollector");
const productHuntCollector = require("./productHuntCollector");
const awesomeAiCollector = require("./awesomeAiCollector");

async function runCollectors() {
  console.log("Running collectors...");

  await githubSearchCollector();
  await npmCollector();
  await productHuntCollector();
  await awesomeAiCollector();

  console.log("Collectors finished.");
}

module.exports = runCollectors;
