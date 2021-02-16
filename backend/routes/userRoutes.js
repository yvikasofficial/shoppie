const express = require("express");
const router = express.Router();

const {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getAllUsers,
  deleteUser,
  updateUserById,
  getUserById,
} = require("../controller/userController");
const { protect, admin } = require("../middleware/authMiddleware");

router.post("/login", authUser);
router.route("/").post(registerUser).get(protect, admin, getAllUsers);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUserById);

module.exports = router;
