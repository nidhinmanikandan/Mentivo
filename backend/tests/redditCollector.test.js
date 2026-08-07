const test = require("node:test");
const assert = require("node:assert/strict");
const axios = require("axios");
const collectRedditTools = require("../collectors/redditCollector");

test("falls back to local sample posts when Reddit returns 403", async () => {
  const originalGet = axios.get;

  axios.get = async () => {
    const error = new Error("Request failed with status code 403");
    error.response = { status: 403 };
    throw error;
  };

  try {
    const posts = await collectRedditTools();

    assert.ok(Array.isArray(posts));
    assert.ok(posts.length > 0);
    assert.equal(posts[0].source, "fallback");
  } finally {
    axios.get = originalGet;
  }
});
