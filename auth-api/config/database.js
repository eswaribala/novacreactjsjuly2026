const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const dbURI = process.env.mongo_uri;

  if (!dbURI) {
    throw new Error("MONGO_URI is missing in the .env file");
  }

  await mongoose.connect(dbURI);

  console.log("Connected to the database");
};

module.exports = { connectToDatabase };