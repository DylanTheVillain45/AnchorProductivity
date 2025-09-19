import express from "express";
import { getUserJournals, createJournal } from "../controllers/journalControllers.js";
import authenticateToken from "../middleware/authenticateToken.js";

const journalRouter = express.Router({ mergeParams: true });

journalRouter.get("/", authenticateToken, getUserJournals);
journalRouter.post("/", authenticateToken, createJournal);
// journalRouter.get("/:id");

export default journalRouter;
