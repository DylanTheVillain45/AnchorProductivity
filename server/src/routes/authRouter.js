import express from "express"
import { SignUp, Login, verifyUser } from "../controllers/authController.js";

const authRouter = express.Router()

authRouter.post("/login", Login)
authRouter.post("/signup", SignUp);
authRouter.get("/verifyUser", verifyUser);

export default authRouter