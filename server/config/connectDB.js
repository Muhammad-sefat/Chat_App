require("dotenv").config();
const mongoose = require("mongoose");

async function connectDB() {
  try {
    const dbUri = process.env.MONGODB_URI;

    if (!dbUri) {
      throw new Error("MONGODB_URI is not defined in environment variables.");
    }

    await mongoose.connect(dbUri);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    connection.on("error", (error) => {
      console.log(`MongoDB connection error: ${error}`);
    });
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
}

module.exports = connectDB;
