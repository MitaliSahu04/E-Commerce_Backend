import express from "express";
import {registerControlller } from "../controllers/registration.controller.js";
import authMiddleware from "../middleware/authentication.js"

const router = express.Router();

router.post("/register", authMiddleware,  registerControlller);

export default router;