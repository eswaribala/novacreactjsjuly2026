const User = require("../models/user");
//const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { name, email,password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please provide name,email and password",
      });
    }

    // Check whether the user already exists
    const existingUser = await User.findOne({ name });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash the password before storing it
   // const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({
      name,
      email,
      password: password,
    });

    const savedUser = await newUser.save();

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = { registerUser };