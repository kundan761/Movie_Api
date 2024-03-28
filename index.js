// index.js or your main server file
const express = require("express");
const app = express();
const { connection } = require("./config/db");
const { movieRouter } = require("./routes/movie.routes");
require('dotenv').config()

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use("/", movieRouter);

// Start the server
app.listen(process.env.PORT, async () => {
  try {
    console.log("Connecting to the database...");
    await connection;
    console.log("Database connection established.");

    console.log(`Server is running at http://localhost:${process.env.PORT}`);
  } catch (err) {
    console.error("Error:", err);
  }
});