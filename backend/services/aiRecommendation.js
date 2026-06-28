const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function recommendTools(profile) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are an AI career mentor.

User Profile:
Role: ${profile.role}
Interest: ${profile.interest}
Level: ${profile.level}

Recommend exactly 8 modern tools.

Return ONLY JSON.

[
 {
   "name":"",
   "category":"",
   "description":"",
   "officialUrl":"",
   "isTrending":true
 }
]
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  return JSON.parse(
    text.replace(/```json/g, "").replace(/```/g, "")
  );
}

module.exports = recommendTools;