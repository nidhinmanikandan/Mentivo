const axios = require("axios");

const TOOL_KEYWORDS = [
  "tool",
  "software",
  "app",
  "platform",
  "library",
  "framework",
  "editor",
  "browser",
  "api",
  "sdk",
  "cli",
  "plugin",
  "service",
  "developer",
  "ai",
  "open source",
  "github",
];

function isToolCandidate(story) {
  const title = (story.title || "").toLowerCase();
  const url = (story.url || "").toLowerCase();

  // Strong signals in the title
  const titleMatch = TOOL_KEYWORDS.some((keyword) => {
    const pattern = new RegExp(`\\b${keyword}\\b`, "i");
    return pattern.test(title);
  });

  // Software-related domains
  const domainMatch =
    url.includes("github.com") ||
    url.includes("npmjs.com") ||
    url.includes("pypi.org") ||
    url.includes("huggingface.co") ||
    url.includes("vercel.com") ||
    url.includes("producthunt.com");

  return titleMatch || domainMatch;
}

async function collectHackerNewsTools() {
  try {
    const response = await axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json",
    );

    const storyIds = response.data.slice(0, 50);

    const stories = await Promise.all(
      storyIds.map(async (id) => {
        const result = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
        );

        return result.data;
      }),
    );

    // Detect stories that may represent tools
    const candidates = stories.filter(isToolCandidate);

    console.log(`Fetched ${stories.length} Hacker News stories.`);

    console.log(`Detected ${candidates.length} potential tool stories:\n`);

    candidates.forEach((story, index) => {
      console.log(`${index + 1}. ${story.title}`);
    });

    // Convert detected stories into CandidateTool-compatible objects
    const toolCandidates = candidates.map((story) => ({
      name: story.title,

      description: story.text || story.title,

      officialUrl:
        story.url || `https://news.ycombinator.com/item?id=${story.id}`,

      sources: [
        {
          type: "hackernews",
          url: `https://news.ycombinator.com/item?id=${story.id}`,
          externalId: String(story.id),

          metadata: {
            score: story.score || 0,
            comments: story.descendants || 0,
          },
        },
      ],

      lastDiscoveredAt: new Date(),
    }));

    return toolCandidates;
  } catch (error) {
    console.error(
      "Hacker News Collector Error:",
      error.response?.status || error.message,
    );

    return [];
  }
}

module.exports = collectHackerNewsTools;
