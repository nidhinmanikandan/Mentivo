const axios = require("axios");

async function collectRedditTools() {
  const subreddit = "artificial";
  const fallbackPosts = [
    {
      id: "fallback-1",
      title: "AI tools for career growth",
      url: "https://example.com/ai-tools",
      source: "fallback",
    },
    {
      id: "fallback-2",
      title: "Building a portfolio with AI workflows",
      url: "https://example.com/portfolio-ai",
      source: "fallback",
    },
    {
      id: "fallback-3",
      title: "Learning roadmap for AI-assisted development",
      url: "https://example.com/ai-roadmap",
      source: "fallback",
    },
  ];

  try {
    const response = await axios.get(
      `https://www.reddit.com/r/${subreddit}/new.json?limit=10`,
      {
        headers: {
          "User-Agent": "AI-Growth/1.0",
          Accept: "application/json",
          "Accept-Language": "en-US,en;q=0.9",
        },
        timeout: 15000,
      },
    );

    const posts = response?.data?.data?.children || [];

    if (!posts.length) {
      console.warn(
        `No posts returned for r/${subreddit}; using fallback sample data.`,
      );
      return fallbackPosts;
    }

    console.log(`Fetched ${posts.length} posts from r/${subreddit}\n`);

    posts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.data.title}`);
    });

    return posts;
  } catch (err) {
    const status = err?.response?.status;
    console.warn(
      `Reddit collector unavailable (status ${status || "unknown"}); using fallback sample data.`,
    );
    return fallbackPosts;
  }
}

module.exports = collectRedditTools;
