const Product = require("../models/product");
const { faker } = require('@faker-js/faker');
//const bcrypt = require("bcrypt");

const addProduct = async (req, res) => {
  try {
    const { name, description, category,price,stock} = req.body;

    if (!name || !description || !category || !price || !stock) {
      return res.status(400).json({
        message: "Please provide name, description, category, price, and stock",
      });
    }

    // Check whether the product already exists
    const existingProduct = await Product.findOne({ name });

    if (existingProduct) {
      return res.status(400).json({
        message: "Product already exists",
      });
    }

    // Hash the password before storing it
   // const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newProduct = new Product({
       productId: faker.number.int({ min: 1, max: 100000000 }), // Generate a unique product ID
       name,
       description,
        category,
        price,
        stock
    });

    const savedProduct = await newProduct.save();

    return res.status(201).json({
      message: "Product added successfully",
      product: {
        id: savedProduct._id,
        name: savedProduct.name,
        description: savedProduct.description,
        category: savedProduct.category,
        price: savedProduct.price,
        stock: savedProduct.stock,
      },
    });
  } catch (error) {
    console.error("Add product error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = { addProduct };