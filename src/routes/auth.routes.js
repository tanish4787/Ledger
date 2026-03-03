import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controllers.js";
const router = express.Router();

router.post("/register", registerUser).post("/login", loginUser);

export default router;
