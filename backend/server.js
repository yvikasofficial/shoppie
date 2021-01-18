const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");

const products = require("./data/products");
const connectDB = require("./config/db");

const app = express();
dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.status(200).json(product);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `listening on port ${port} in ${process.env.NODE_ENV}....`.yellow.bold
  );
});
