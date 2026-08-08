const axios = require("axios");

const TOOL_KEYWORDS = [
  "tool",
  "software",
  "app",
  "platform",
  "library",
  "framework",
  "open source",
  "developer tool",
  "ai tool",
  "cli",
  "editor",
  "browser",
  "api",
  "sdk",
];

function isToolCandidate(story) {
  const text = `${story.title || ""} ${story.text || ""}`.toLowerCase();

  return TOOL_KEYWORDS.some((keyword) => text.includes(keyword));
}

async function collectHackerNewsTools() {
  try {
    const response = await axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );

    const storyIds = response.data.slice(0, 20);

    const stories = await Promise.all(
      storyIds.map(async (id) => {
        const result = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );

        return result.data;
      })
    );

    // Detect stories that may represent tools
    const candidates = stories.filter(isToolCandidate);

    console.log(
      `Fetched ${stories.length} Hacker News stories.`
    );

    console.log(
      `Detected ${candidates.length} potential tool stories:\n`
    );

    candidates.forEach((story, index) => {
      console.log(`${index + 1}. ${story.title}`);
    });

    // Convert detected stories into CandidateTool-compatible objects
    const toolCandidates = candidates.map((story) => ({
      name: story.title,

      description: story.text || story.title,

      officialUrl:
        story.url ||
        `https://news.ycombinator.com/item?id=${story.id}`,

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
      error.response?.status || error.message
    );

    return [];
  }
}

module.exports = collectHackerNewsTools;