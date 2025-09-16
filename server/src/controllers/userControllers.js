import User from "../models/User.js";
import { GetHash } from "../config/hash.js";

export async function getAllUsers(_, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log("Error in getAllUsers", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getUserbyId(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found!" });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    console.log("Error in getUserbyId", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createUser(req, res) {
  try {
    const { email, password, role } = req.body;
    const hashedPassword = GetHash(password);
    if (!role) role = "user";

    const user = new User({ email, hashedPassword, role });
    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.log("Error in createUser", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteUser(req, res) {
  try {
    const deletedUser = User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log("Error in deleteUser", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


export async function deleteAllUsers(req, res) {
  try {
    await User.deleteMany({});

    res.status(200).json({ message: "ALL USERS DELETED 😈" });
  } catch (error) {
    console.log("Error in deleteUser", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
