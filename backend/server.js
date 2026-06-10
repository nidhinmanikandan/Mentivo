const express = require("express");
const cors = require("cors");

const careerRoutes = require("./routes/career");

const mentorRoutes = require("./routes/mentor");

const progressRoutes = require("./routes/progress");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/career", careerRoutes);
app.use("/api/career/mentor", mentorRoutes);
app.use("/api/progress", progressRoutes);
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
