const express = require("express");
const router = express.Router();

const {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} = require("../controller/orderController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, addOrderItem);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id").get(protect, getOrderById);

module.exports = router;
