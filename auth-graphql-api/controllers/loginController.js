require("dotenv").config();

const User = require("../models/user");

const loginUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({
        message: "Please provide name and password",
      });
    }

    const user = await User.findOne({ name });

    if (!user) {
      return res.status(401).json({
        message: "Invalid name or password",
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        message: "Invalid name or password",
      });
    }

    return res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Error while logging in",
    });
  }
};

module.exports = { loginUser };