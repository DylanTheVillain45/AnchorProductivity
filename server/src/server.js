import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRouter.js";
import journalRouter from "./routes/journalRouter.js";

dotenv.config({ quiet: true });

const app = express()
const PORT = process.env.PORT;
const origin = process.env.ORIGIN;

app.use(cors({
    origin
}))
app.use(express.json())

app.use((req, res, next) => {
    console.log(`Req method is ${req.method} and req url is ${req.url}`)
    next()
})

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter)
app.use("/api/journals", journalRouter);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on: ", PORT)
    })
})
