require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const { connectToDatabase } = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const swaggerSpecification = require("./config/swagger");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL
    //credentials: true,
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

// Swagger documentation
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecification)
);

// Optional OpenAPI JSON endpoint
app.get("/api-docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpecification);
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: "Unexpected server error",
  });
});

const port = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectToDatabase();

    app.listen(port, () => {
      console.log(`API running on http://localhost:${port}`);
      console.log(`Swagger UI: http://localhost:${port}/api-docs`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();