const { Octokit } = require("@octokit/rest");
const Tool = require("../models/Tool");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

module.exports = async function githubSearchCollector() {
  console.log("Collecting GitHub repositories...");

  const result = await octokit.search.repos({
    q: "AI tool stars:>500",
    sort: "stars",
    order: "desc",
    per_page: 30,
  });

  for (const repo of result.data.items) {
    await Tool.updateOne(
      { officialUrl: repo.html_url },
      {
        name: repo.name,
        category: "GitHub Project",
        description: repo.description || "",
        officialUrl: repo.html_url,
        logoDomain: "github.com",
        tags: repo.topics || [],
        platform: "GitHub",
        isTrending: true,
        source: "github-search",
      },
      { upsert: true },
    );
  }

  console.log(`Saved ${result.data.items.length} GitHub tools.`);
};