require("dotenv").config();

const connectDB = require("./config/db");

const runCollectors = require("./collectors/runCollectors");
const runValidation = require("./validators/runValidation");
const runEnrichment=require("./enrichers/runEnrichment");

async function test() {
  await connectDB();

  await runCollectors();

  await runValidation();

  await runEnrichment();

  process.exit(0);
}

test().catch(console.error);