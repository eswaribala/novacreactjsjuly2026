require('dotenv').config();
export async function connectToDatabase() {
    const mongoose = require('mongoose');
    const dbURI = process.env.MONGO_URI;
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