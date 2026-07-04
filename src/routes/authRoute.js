import express from "express";
import { loginAuth } from "../controllers/authController.js";

const router = express.Router();

router.post("/loginAuth", loginAuth);

export default router;