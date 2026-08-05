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

const fetchProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      products,
    });
  } catch (error) {
    console.error("Fetch products error:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

const fetchProductById = async (req, res) => {
  try {
    const { id } = req.params;
    //search for the product by productId in the database
    const product = await Product.findOne({ productId: id });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    return res.status(200).json({
      product,
    });
  } catch (error) {
    console.error("Fetch product by ID error:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};



const updateProduct = async (req, res) => {
  try {
    
    const { productId,name, description, category, price, stock } = req.body;

    const updatedProduct = await Product.findOneAndUpdate(
      { productId: productId },
      { name, description, category, price, stock },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Update product error:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    
    const deletedProduct = await Product.findOneAndDelete({ productId: productId });

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    console.error("Delete product error:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = { addProduct, fetchProducts, fetchProductById, updateProduct, deleteProduct };