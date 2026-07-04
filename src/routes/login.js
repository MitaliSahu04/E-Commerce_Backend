import express from "express"
import { logindetails } from "../models/login.model";

const router = express.Router();


router.post("/login", logindetails);

export default router;