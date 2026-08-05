require("dotenv").config();

const connectDB = require("./config/db");

const runCollectors = require("./collectors/runCollectors");
const runValidation = require("./validators/runValidation");
const runEnrichment = require("./enrichers/runEnrichment");
const runResolver = require("./resolvers/runResolver");
const websiteEnricher = require("./enrichers/websiteEnricher");

async function test() {
  await connectDB();

  await runCollectors();

  await runValidation();

  await runEnrichment();

  await runResolver();

  await websiteEnricher();

  process.exit(0);
}

test().catch(console.error);
