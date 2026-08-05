const User=require('../models/userModel');

const changePassword = async (req, res) => {

    console.log('Received change password request:', req.body);
    try {
        const { name, oldPassword, newPassword } = req.body;

        if (!name || !oldPassword || !newPassword) {
            return res.status(400).json(
                { message: 'All fields are required' });
        }

        const existingUser = await User.findOne({ name });
        if (!existingUser) {
            return res.status(404).json(
                { message: 'User not found' });
        }

        if (existingUser.password !== oldPassword) {
            return res.status(400).json(
                { message: 'Old password is incorrect' });
        }

        existingUser.password = newPassword;
        await existingUser.save();
        res.status(200).json(
            { message: 'Password changed successfully' });
    } catch (error) {
        res.status(500).json(
            { message: 'Server error' });
    }
};

module.exports = { changePassword };