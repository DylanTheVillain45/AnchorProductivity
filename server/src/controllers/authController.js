import User from "../models/User.js";
import { GetHash, MatchHash } from "../config/hash.js";
import jwt from "jsonwebtoken";

export async function SignUp(req, res) {
  try {
    const { email, password, role } = req.body;
    const hashedPassword = await GetHash(password);

    const user = new User({ email, hashedPassword, role });
    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.log("Error in SignUp", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function Login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "No user with that email" });
    }

    const match = await MatchHash(password, user.hashedPassword);
    if (!match) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(200).json({message: "Login successfully",
        token, user: {
            id: user._id,
            email: user.email,
            role: user.role
        }})
  } catch (error) {
    console.log("Error in Login", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
