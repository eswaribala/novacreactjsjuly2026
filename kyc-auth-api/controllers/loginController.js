const User=require('../models/userModel');

const loginUser = async (req, res) => {
    try {
        const { name, password } = req.body;
        if (!name || !password) {   
            return res.status(400).json(
                { message: 'All fields are required' });
        }
        //check if user exists
        const user = await User.findOne({ name });
        if (!user) {
            return res.status(400).json(
                { message: 'Invalid credentials' });
        }
        //check if password matches
        if (user.password !== password) {
            return res.status(400).json(
                { message: 'Invalid credentials' });
        }
        res.status(200).json(
            { message: 'Login successful' });
    } catch (error) {
        res.status(500).json(
            { message: 'Server error' });
    }
};

module.exports = { loginUser };