import User from "../models/User.js";
import { MatchHash } from "../config/hash.js";
import jwt from "jsonwebtoken"

export async function Login(req, res) {
    try {
        const { email, password } = req.body

        const user = User.findOne({ email })
        if (!user) {
            return res.status(400).json({message: "No user with that email"})
        }

        const match = MatchHash(password, user.hashedPassword);
        if (!match) {
          return res.status(400).json({ message: "Incorrect password" });
        }


        console.log("SUCCESS!")
    } catch (error) {
    console.log("Error in Login", error);
    res.status(500).json({ message: "Internal Server Error" });
        
    }
}