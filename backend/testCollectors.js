require("dotenv").config();

const connectDB = require("./config/db");
const runCollectors = require("./collectors/runCollectors");

async function test() {
  await connectDB();

  console.log("MongoDB Connected");

  await runCollectors();

  process.exit(0);
}

test().catch(console.error);