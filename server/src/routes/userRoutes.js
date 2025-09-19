import express from "express"
import { getAllUsers, getUserbyId, deleteAllUsers } from "../controllers/userControllers.js";
import authenticateToken from "../middleware/authenticateToken.js";

const userRouter = express.Router();

userRouter.get("/", authenticateToken({isAdmin: true}), getAllUsers);
userRouter.get("/:id", getUserbyId);
userRouter.delete("/deleteAll", deleteAllUsers);

export default userRouter;