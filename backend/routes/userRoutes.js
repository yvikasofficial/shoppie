const express = require("express");
const router = express.Router();

const { authUser } = require("../controller/userController");

router.post("/login", authUser);

module.exports = router;
