const express = require("express");
const asyncHandler = require("express-async-handler");

const Product = require("../models/productModel");

const router = express.Router();

// @desc  Fetch All products
// @route  GET /api/products
// @access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
  })
);

// @desc  Fetch Single product
// @route  GET /api/products/:id
// @access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "product not found!" });
    }
  })
);

module.exports = router;
