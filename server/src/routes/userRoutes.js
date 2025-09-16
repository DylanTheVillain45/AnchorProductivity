import express from "express"
import { getAllUsers, getUserbyId, createUser, deleteAllUsers } from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserbyId);
userRouter.post("/", createUser);
userRouter.delete("/deleteAll", deleteAllUsers);

export default userRouter;