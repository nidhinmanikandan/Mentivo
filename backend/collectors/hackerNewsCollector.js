const axios = require("axios");

async function collectHackerNewsTools() {
  try {
    const response = await axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json",
    );

    const storyIds = response.data.slice(0, 10);

    const stories = await Promise.all(
      storyIds.map(async (id) => {
        const result = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
        );

        return result.data;
      }),
    );

    console.log(`Fetched ${stories.length} Hacker News stories:\n`);

    const candidates = stories
      .filter((story) => story && story.title)
      .map((story) => ({
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

    candidates.forEach((candidate, index) => {
      console.log(`${index + 1}. ${candidate.name}`);
    });

    return candidates;
  } catch (error) {
    console.error(
      "Hacker News Collector Error:",
      error.response?.status || error.message,
    );

    return [];
  }
}

module.exports = collectHackerNewsTools;
