const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });

const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Finance Hub Backend Running Successfully");
});

// Port
const PORT = process.env.PORT || 5000;

const connectDB = require("./database");

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});