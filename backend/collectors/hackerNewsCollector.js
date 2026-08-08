const axios = require("axios");

async function collectHackerNewsTools() {
  try {
    // Get the IDs of the latest top stories
    const response = await axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json",
    );

    const storyIds = response.data.slice(0, 10);

    // Fetch each story
    const stories = await Promise.all(
      storyIds.map(async (id) => {
        const result = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
        );

        return result.data;
      }),
    );

    console.log(`Fetched ${stories.length} Hacker News stories:\n`);

    stories.forEach((story, index) => {
      console.log(`${index + 1}. ${story.title}`);
    });

    return stories;
  } catch (error) {
    console.error(
      "Hacker News Collector Error:",
      error.response?.status || error.message,
    );

    return [];
  }
}

module.exports = collectHackerNewsTools;
