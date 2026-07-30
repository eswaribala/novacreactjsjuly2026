const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const dbURI = process.env.mongo_uri;

  if (!dbURI) {
    throw new Error("MONGO_URI is missing in the .env file");
  }

  await mongoose.connect(dbURI,{
     serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
  }
  );

  console.log("Connected to the database");
};

module.exports = { connectToDatabase };