const Product = require("../models/product.js");

const resolvers = {
    Query: {
        getProducts: async () => {
            try {
                const products = await Product.find();
                return products;
            } catch (error) {
                throw new Error("Failed to fetch products");
            }
        },
        getProductById: async (_, { productId }) => {
            try {
                const product = await Product.findOne({ productId: productId });
                if (!product) {
                    throw new Error("Product not found");
                }
                return product;
            } catch (error) {
                throw new Error("Failed to fetch product");
            }
        },
    },
    Mutation: {
        createProduct: async (_, { input }) => {
            try {
                const newProduct = new Product(input);
                const savedProduct = await newProduct.save();
                return savedProduct;
            } catch (error) {
                throw new Error("Failed to create product");
            }
        },
        updateProduct: async (_, { productId, input }) => {
            try {   
                const updatedProduct = await Product.findOneAndUpdate({ productId: productId }, input, { new: true });
                if (!updatedProduct) {
                    throw new Error("Product not found");
                }
                return updatedProduct;
            } catch (error) {
                throw new Error("Failed to update product");
            }
        },
        deleteProduct: async (_, { productId }) => {
            try {
                const deletedProduct = await Product.findOneAndDelete({ productId: productId });
                if (!deletedProduct) {
                    throw new Error("Product not found");
                }
                return deletedProduct;
            } catch (error) {
                throw new Error("Failed to delete product");
            }
        },  
    },
};

module.exports = resolvers;