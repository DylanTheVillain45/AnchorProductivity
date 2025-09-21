import express from "express";
import {
  getAllUsers,
  getUserbyId,
  deleteAllUsers,
  deleteUserbyId,
} from "../controllers/userControllers.js";
import authenticateToken from "../middleware/authenticateToken.js";

const userRouter = express.Router();

userRouter.get("/", authenticateToken({ isAdmin: true }), getAllUsers);
userRouter.get("/:id", authenticateToken({ isAdmin: true }), getUserbyId);
userRouter.delete(
    "/",
    authenticateToken({ isAdmin: true }),
    deleteAllUsers
);
userRouter.delete("/:id", authenticateToken({ isAdmin: true }), deleteUserbyId);

export default userRouter;
