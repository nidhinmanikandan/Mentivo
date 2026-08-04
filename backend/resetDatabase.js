require("dotenv").config();

const connectDB = require("./config/db");

const CandidateTool = require("./models/CandidateTool");
const Tool = require("./models/Tool");

async function reset() {
  await connectDB();

  await CandidateTool.deleteMany({});
  await Tool.deleteMany({});

  console.log("Database cleared.");

  process.exit(0);
}

reset().catch(console.error);