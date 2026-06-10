// Import the Express web framework to create the server
const express = require("express");

// Import CORS middleware so browser apps from another origin can call this API
const cors = require("cors");

// Load career-related route handlers from routes/career.js
const careerRoutes = require("./routes/career");

// Load mentor-related route handlers from routes/mentor.js
const mentorRoutes = require("./routes/mentor");

// Load progress-related route handlers from routes/progress.js
const progressRoutes = require("./routes/progress");

// Create the Express application instance
const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse incoming JSON request bodies and make them available on req.body
app.use(express.json());

// Mount the career route handlers at /api/career
app.use("/api/career", careerRoutes);

// Mount the mentor route handlers at /api/career/mentor
app.use("/api/career/mentor", mentorRoutes);

// Mount the progress route handlers at /api/progress
app.use("/api/progress", progressRoutes);

// Start the server listening on port 5000
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
