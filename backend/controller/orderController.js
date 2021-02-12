const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

// @desc  Create New Product
// @route  POST /api/products
// @access  Public
exports.addOrderItem = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No Order Items");
  } else {
    const order = new Order({
      orderItems,
      user: req.use._id,
      shippingAddress,
      paymentMethod,
      itemsMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});
