import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.controllers.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

/* FIND */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;