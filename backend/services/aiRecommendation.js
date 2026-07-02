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

Recommend exactly 8 modern tools that are most useful for this user.

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

  const result = await model.generateContent(prompt);

  const text = result.response
    .text()
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(text);
}

module.exports = recommendTools;