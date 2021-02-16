const express = require("express");
const router = express.Router();

const {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getAllUsers,
  deleteUser,
} = require("../controller/userController");
const { protect, admin } = require("../middleware/authMiddleware");

router.post("/login", authUser);
router.route("/").post(registerUser).get(protect, admin, getAllUsers);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route("/:id").delete(protect, admin, deleteUser);

module.exports = router;
