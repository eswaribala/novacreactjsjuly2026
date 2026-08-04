const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Authentication API",
      version: "1.0.0",
      description: "API documentation for user registration and login",
    },

    servers: [
      {
        url: "http://localhost:5000",
        description: "Local development server",
      },
    ],

    components: {
      schemas: {
        RegisterRequest: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: {
              type: "string",
              example: "Parameswari",
            },
            email: {
              type: "string",
              format: "email",
              example: "parameswari@example.com",
            },
            password: {
              type: "string",
              format: "password",
              example: "Password@123",
            },
          },
        },

        LoginRequest: {
          type: "object",
          required: ["name", "password"],
          properties: {
            name: {
              type: "string",
              example: "Parameswari",
            },
            password: {
              type: "string",
              format: "password",
              example: "Password@123",
            },
          },
        },

        User: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "688b40628e7e1f1234567890",
            },
            name: {
              type: "string",
              example: "Parameswari",
            },
            email: {
              type: "string",
              example: "parameswari@example.com",
            },
          },
        },

        Product: {
          type: "object",
          properties: {
          
            name: {
              type: "string",
              example: "Sample Product",
            },
            description: {
              type: "string",
              example: "This is a sample product description.",
            },
            category: {
              type: "string",
              example: "Electronics",
            },
            price: {
              type: "number",
              example: 99.99,
            },
            stock: {
              type: "number",
              example: 100,
            },
          },
        },
        AddProductRequest: {
          type: "object",
          required: ["name", "description", "category", "price", "stock"],
          properties: {
            name: {
              type: "string",
              example: "Sample Product",
            },
            description: {
              type: "string",
              example: "This is a sample product description.",
            },
            category: {
              type: "string",
              example: "Electronics",
            },
            price: {
              type: "number",
              example: 99.99,
            },
            stock: {
              type: "number",
              example: 100,
            },
          },
        },
        FetchProductsResponse: {
          type: "object",
          properties: {
            products: {
              type: "array",
              items: {  
                $ref: "#/components/schemas/Product" },
              },
            },
          },
          

        ErrorResponse: {
          type: "object",
          properties: {
            message: {
              type: "string",
              example: "Server error",
            },
          },
        },
      },
    },
  },

  apis: ["./routes/*.js"],
};

const swaggerSpecification = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpecification;