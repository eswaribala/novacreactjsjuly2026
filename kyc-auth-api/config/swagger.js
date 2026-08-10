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
        ChangePasswordRequest: {
          type: "object",
          required: ["name", "oldPassword", "newPassword"],
          properties: {
            name: {
              type: "string",
              example: "Parameswari",
            },
            oldPassword: {
              type: "string",
              format: "password",
              example: "OldPassword@123",
            },
            newPassword: {
              type: "string",
              format: "password",
              example: "NewPassword@123",
            },
          },
        },

        CreatePolicyRequest: {
          type: "object",
          required: ["userName","policyNo", "policyHolderName", "beneficiaryType", "documentType", "documentNumber"],
          properties: {
            userName: {
              type: "string",
              example: "Parameswari",
            },
            policyNo: {
              type: "number",
              example: 123456,
            },
            policyHolderName: {
              type: "string",
              example: "John Doe",
            },
            beneficiaryType: {
              type: "string",
              example: "Spouse",
            },
            documentType: {
              type: "string",
              example: "Passport",
            },
            documentNumber: {
              type: "string",
              example: "A1234567",
            },
          },
        },

        getPolicyByIdRequest: {
          type: "object",
          required: ["id"],
          properties: {
            id: {
              type: "number",
              example: 123456,
            },
          },
        },

        getPolicyByCustomerIdRequest: {
          type: "object",
          required: ["name"],
          properties: {
            name: {
              type: "string",
              example: "Parameswari",
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