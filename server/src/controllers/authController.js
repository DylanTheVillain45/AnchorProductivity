import User from "../models/User.js";
import { GetHash, MatchHash } from "../config/hash.js";
import jwt from "jsonwebtoken";

export async function SignUp(req, res) {
  try {
    let { email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use" });
    }

    const hashedPassword = await GetHash(password);

    if (email === "dylan.ebel@outlook.com") {
      role = "admin";
    }

    const newUser = new User({ email, hashedPassword, role });
    await newUser.save();

    const token = jwt.sign(
      {
        id: newUser._id,
        email: newUser.email,
        role: newUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(201).json({
      message: "Successfully signed up!",
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        role: newUser.role,
      },
    });
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

    res.status(200).json({
      message: "Login successfully",
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("Error in Login", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


export async function verifyUser(req, res) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).json({ message: "No Token" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid Token" });
      res.json({ user });
    });
  } catch (error) {
    console.log("Error in verifyUser", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}