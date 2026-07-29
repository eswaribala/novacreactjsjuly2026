//login check user
require('dotenv').config();
const User = require('../models/user');
export async function loginUser(req, res) {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).json({ message: 'Please provide name and password' });
  }

    // Find the user by name
    User.findOne({ name: name }, (err, user) => {
      if (err) {
        return res.status(500).json({ message: 'Error finding user' });
      }
      if (!user) {
        return res.status(401).json({ message: 'Invalid name or password' });
      }
      // Check if the password is correct
      if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid name or password' });
      }
      return res.status(200).json({ message: 'Login successful', user });
    });


}