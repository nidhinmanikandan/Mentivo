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
  "open source",
];

function getToolScore(story) {
  const title = (story.title || "").toLowerCase();
  const url = (story.url || "").toLowerCase();

  let score = 0;

  // Strong signals that the story is actually presenting a tool
  const strongSignals = [
    "tool",
    "app",
    "platform",
    "library",
    "framework",
    "plugin",
    "browser",
    "editor",
    "service",
    "released",
    "launches",
    "introducing",
    "open source",
  ];

  strongSignals.forEach((keyword) => {
    if (title.includes(keyword)) {
      score += 0.3;
    }
  });

  // Strong source signals
  if (url.includes("github.com")) score += 0.5;
  if (url.includes("npmjs.com")) score += 0.5;
  if (url.includes("pypi.org")) score += 0.5;
  if (url.includes("huggingface.co")) score += 0.5;
  if (url.includes("producthunt.com")) score += 0.5;

  // Negative signals: usually articles/news rather than tools
  const negativeSignals = [
    "war",
    "attack",
    "backdoor",
    "psychological",
    "hall of shame",
    "deaths",
    "costs",
    "bans",
    "history",
    "2014",
    "2015",
    "2020",
    "2021",
    "2022",
    "2023",
  ];

  negativeSignals.forEach((keyword) => {
    if (title.includes(keyword)) {
      score -= 0.4;
    }
  });

  return Math.max(0, Math.min(score, 1));
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
    const candidates = stories
      .map((story) => ({
        ...story,
        toolScore: getToolScore(story),
      }))
      .filter((story) => story.toolScore >= 0.4);

    console.log(`Fetched ${stories.length} Hacker News stories.`);

    console.log(`Detected ${candidates.length} potential tool stories:\n`);

    candidates.forEach((story, index) => {
      console.log(
        `${index + 1}. ${story.title} [score: ${story.toolScore.toFixed(2)}]`,
      );
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
