export async function connectToDatabase() {
    const mongoose = require('mongoose');
    const dotenv = require("dotenv");
    dotenv.config();   
    const dbURI = process.env.mongo_uri;
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database', error);
        throw error;
    }
}