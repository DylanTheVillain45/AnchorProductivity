import express from "express"
import { Login } from "../controllers/authController.js";

const authRouter = express.Router()

authRouter.post("/login", Login)

export default authRouter