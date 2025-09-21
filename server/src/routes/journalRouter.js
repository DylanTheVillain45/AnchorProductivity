import express from "express";
import {
  getUserJournals,
  createJournal,
  getDatedUserJournal,
  updateDatedUserJournal,
} from "../controllers/journalControllers.js";
import authenticateToken from "../middleware/authenticateToken.js";

const journalRouter = express.Router({ mergeParams: true });

journalRouter.get("/", authenticateToken(), getUserJournals);
journalRouter.get("/:date", authenticateToken(), getDatedUserJournal);
journalRouter.put("/:date", authenticateToken(), updateDatedUserJournal);
journalRouter.post("/", authenticateToken(), createJournal);
// journalRouter.get("/:id");

export default journalRouter;
