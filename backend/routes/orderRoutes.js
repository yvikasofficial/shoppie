const express = require("express");
const router = express.Router();

const { addOrderItem } = require("../controller/orderController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, addOrderItem);

module.exports = router;
