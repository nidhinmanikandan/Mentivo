const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function recommendTools(profile) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are an expert AI career mentor.

User Profile:
- Role: ${profile.role}
- Interest: ${profile.interest}
- Level: ${profile.level}

Recommend exactly 12 modern tools that are most useful for this user.

Rules:
- Mix beginner and advanced tools.
- Prioritize currently popular tools.
- Description must be VERY SHORT (maximum 4 words).
- officialUrl must be the official website.
- logoDomain should only contain the domain name (no https://).
- Return ONLY valid JSON.
- No markdown.
- No explanations.

Example:

[
  {
    "name":"Cursor",
    "category":"AI Code Editor",
    "description":"AI coding assistant",
    "officialUrl":"https://cursor.com",
    "logoDomain":"cursor.com",
    "isTrending":true
  }
]
`;

  for (let attempt = 1; attempt <= 2; attempt += 1) {
    const result = await model.generateContent(prompt);

    const text = result.response
      .text()
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const tools = JSON.parse(text);

    if (Array.isArray(tools) && tools.length === 12) {
      return tools;
    }

    if (attempt === 2) {
      throw new Error(
        `Expected 12 modern tools from Gemini, but received ${
          Array.isArray(tools) ? tools.length : "an invalid response"
        }.`,
      );
    }

    console.log(
      `Gemini returned ${Array.isArray(tools) ? tools.length : "invalid response"}. Retrying once...`,
    );
  }
}

module.exports = recommendTools;
