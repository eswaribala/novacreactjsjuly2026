//registration to save user data in database
require('dotenv').config();
const User = require('../models/user');
export async function registerUser(req, res) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400)
        .json(
            { message: 'Please provide name, email, and password' });
    }

    //user exists check

    User.findOne({ email })
        .then((existingUser) => {
            if (existingUser) {
                return res.status(400)
                .json({ message: 'User already exists' });
            }
        })
        .catch((error) => {
            return res.status(500).json({ message: 'Server error', error });
        });
    
       //create new user
       const newUser = new User({ name, email, password });
       newUser.save()
           .then((user) => {
               return res.status(201).
               json({ message: 'User registered successfully', user });
           })
           .catch((error) => {
               return res.status(500).
               json({ message: 'Server error', error });
           });



}


