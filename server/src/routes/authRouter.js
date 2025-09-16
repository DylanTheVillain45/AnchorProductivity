import express from "express"
import { SignUp, Login } from "../controllers/authController.js";

const authRouter = express.Router()

authRouter.post("/login", Login)
authRouter.post("/signup", SignUp);

export default authRouter