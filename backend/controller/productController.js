const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc  Fetch All products
// @route  GET /api/products
// @access  Public
exports.getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc  Fetch Single product
// @route  GET /api/products/:id
// @access  Public
exports.getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "product not found!" });
  }
});
