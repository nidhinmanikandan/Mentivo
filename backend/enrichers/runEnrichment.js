const Tool = require("../models/Tool");

async function runEnrichment(){

    const tools = await Tool.find({
        enriched:false
    });

    console.log(`Need enrichment: ${tools.length}`);
}

module.exports = runEnrichment;