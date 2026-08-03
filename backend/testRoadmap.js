const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const prompt = `
Generate a JSON roadmap for learning Figma.

Return:

{
  "title":"Figma",
  "roadmap":[
    {
      "id":"figma",
      "title":"Basics",
      "parents":[]
    }
  ]
}

Return JSON only.
`;

async function test() {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    console.log("1");

    const result = await model.generateContent(prompt);

    console.log("2");

    const text = result.response.text();

    console.log("3");

    console.log("========== RAW RESPONSE ==========");
    console.log(text);
    console.log("==================================");

    const roadmap = JSON.parse(
      text.replace(/```json/g, "").replace(/```/g, "").trim()
    );

    console.log("4");

    console.log(JSON.stringify(roadmap, null, 2));
  } catch (err) {
    console.error(err);
  }
}

test();