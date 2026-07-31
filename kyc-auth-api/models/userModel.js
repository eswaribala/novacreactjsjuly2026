const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^[a-zA-Z0-9]+$/,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        maxlength: 10
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;