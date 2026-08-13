const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Partner API",
      version: "1.0.0",
      description: "API documentation for partner management",
    },

    servers: [
      {
        url: "http://localhost:5000",
        description: "Local development server",
      },
    ],

    components: {
      schemas: {
        CreatePartnerRequest: {
          type: "object",
          required: ["mobileNo", "partnerCode", "partnerName"],
          properties: {
            mobileNo: {
              type: "number",
              example: 1234567890,
            },
            partnerCode: {
              type: "string",
              example: "P12345",
            },
            partnerName: {
              type: "string",
              example: "Parameswari",
            },
          },
        },
        GetAllPartnersResponse: {
          type: "array",
          items: {
            $ref: "#/components/schemas/CreatePartnerRequest",
          },
        },
        GetPartnerByMobileNoRequest: {
          type: "object",
          required: ["mobileNo", "partnerCode", "partnerName"],
          properties: {
            mobileNo: {
              type: "number",
              example: 1234567890,
            },
            partnerCode: {
              type: "string",
              example: "P12345",
            },
            partnerName: {
              type: "string",
              example: "Parameswari",
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