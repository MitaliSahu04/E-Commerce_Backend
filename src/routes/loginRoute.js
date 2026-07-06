import express from "express";
import { loginController } from "../controllers/login.controller.js";
import authMiddleware from "../middleware/authentication.js";

const router = express.Router();

router.post("/login", loginController);

export default router;