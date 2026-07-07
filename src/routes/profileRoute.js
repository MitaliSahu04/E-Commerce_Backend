import express from "express";
import authMiddleware from "../middleware/authentication.js";
import { getProfile } from "../controllers/profileController.js";
const router = express.Router();

router.get("/profile", getProfile);

export default router;