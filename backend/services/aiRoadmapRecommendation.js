const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateRoadmap(tool) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are an expert curriculum designer.

Generate a dependency-based learning roadmap for the following tool.

Tool:
${tool.name}

Description:
${tool.description}

Return ONLY valid JSON.

Schema:

{
  "title":"Tool Name",
  "description":"One sentence description",
  "logoDomain":"tool.com",
  "roadmap":[
    {
      "id":"unique-id",
      "title":"Node Title",
      "description":"Very short description (max 8 words)",
      "steps":[
        "Step 1",
        "Step 2",
        "Step 3"
      ],
      "parents":[]
    }
  ]
}

Rules:

- Return between 10 and 15 roadmap nodes.
- Organize concepts by prerequisite relationships.
- Root node must have an empty parents array.
- Parent ids must always exist.
- Multiple parents are allowed.
- Every id must be unique.
- Steps should contain exactly 3 concise actions.
- Description should be under 8 words.
- Do NOT return markdown.
- Do NOT explain anything.
- Return JSON only.
`;

  for (let attempt = 1; attempt <= 2; attempt++) {
    const result = await model.generateContent(prompt);

    const text = result.response
      .text()
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    try {
      const roadmap = JSON.parse(text);

      if (
        roadmap &&
        Array.isArray(roadmap.roadmap) &&
        roadmap.roadmap.length >= 10
      ) {
        return roadmap;
      }
    } catch {}

    if (attempt === 2) {
      throw new Error("Gemini returned an invalid roadmap.");
    }

    console.log("Retrying roadmap generation...");
  }
}

module.exports = generateRoadmap;