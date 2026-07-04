import express from "express"
import { logindetails } from "../models/login.model.js";

const router = express.Router();


router.post("/login", logindetails);

export default router;