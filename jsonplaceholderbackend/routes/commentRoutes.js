const express = require("express");
const {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");
const validateCommentData = require("../middleware/validateCommentData"); // Hypothetical middleware for validation
const router = express.Router();

// Public routes
router.get("/", getAllComments);
router.get("/:id", getCommentById);

// Protected routes (authentication middleware can be added)
router.post("/", validateCommentData, createComment);
router.put("/:id", validateCommentData, updateComment);
router.delete("/:id", deleteComment);

module.exports = router;
