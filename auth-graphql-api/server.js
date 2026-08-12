require("dotenv").config();

const express = require("express");
const cors = require("cors");


const { connectToDatabase } = require("./config/database");


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




// Global error handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    message: err.message || "Unexpected server error",
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