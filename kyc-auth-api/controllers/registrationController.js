const User=require('../models/userModel');

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json(
                { message: 'All fields are required' });
        }

        const existingUser = await User.findOne({ name });
        if (existingUser) {
            return res.status(400).json(
                { message: 'User already exists' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json(
            { message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json(
            { message: 'Server error' });
    }
};

module.exports = { registerUser };