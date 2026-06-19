const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Trying to connect...");

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.log("❌ MongoDB Connection Error:");
    console.log(error);
  }
};

module.exports = connectDB;