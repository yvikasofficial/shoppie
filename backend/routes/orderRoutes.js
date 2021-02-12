const express = require("express");
const router = express.Router();

const { addOrderItem, getOrderById } = require("../controller/orderController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, addOrderItem);
router.route("/:id").get(protect, getOrderById);

module.exports = router;
