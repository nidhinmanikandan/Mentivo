// Import the Express web framework to create the server
const express = require("express");

const cors = require("cors");

const careerRoutes = require("./routes/career");

const mentorRoutes = require("./routes/mentor");

const progressRoutes = require("./routes/progress");

const roadmapRoutes = require("./routes/roadmap");

const toolsRoutes = require("./routes/tools");

// Create the Express application instance
const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.use("/api/career", careerRoutes);

app.use("/api/career/mentor", mentorRoutes);

app.use("/api/progress", progressRoutes);

app.use("/api/roadmap", roadmapRoutes);

app.use("/api/tools", toolsRoutes);

// Start the server listening on port 5000
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
