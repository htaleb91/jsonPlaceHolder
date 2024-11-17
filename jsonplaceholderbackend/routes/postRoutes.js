const express = require("express");
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const validatePostData = require("../middleware/validatePostData"); // Hypothetical middleware for validation
const router = express.Router();

// Public routes
router.get("/", getAllPosts);
router.get("/:id", getPostById);

// Protected routes (authentication middleware can be added)
router.post("/", validatePostData, createPost);
router.put("/:id", validatePostData, updatePost);
router.delete("/:id", deletePost);

module.exports = router;
