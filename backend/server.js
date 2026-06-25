require("dotenv").config();

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const dataRoutes = require("./routes/data");

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.MONGO_URL) {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log("MongoDB Connected Successfully 🚀"))
    .catch(err => console.log("MongoDB Connection Error ❌", err));
} else {
  console.warn("MONGO_URL not configured. Auth will still work with default demo credentials.");
}

app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});