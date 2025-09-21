import User from "../models/User.js";
import Journal from "../models/Journal.js";
import jwt from "jsonwebtoken";

export async function getUserJournals(req, res) {
  try {
    const journals = await Journal.find({ user: req.user.id });

    res.status(200).json(journals);
  } catch (error) {
    console.log("Error in getUserJournals", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getJournalbyId(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found!" });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    console.log("Error in getJournalbyId", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createJournal(req, res) {
  try {
    const { title, content, date } = req.body;
    const user = req.user.id;

    const journal = new Journal({ title, content, date, user });
    const savedJournal = await journal.save();

    res.status(201).json(savedJournal);
  } catch (error) {
    console.log("Error in createJournal", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getDatedUserJournal(req, res) {
  try {
    const journal = await Journal.findOne({
      user: req.user.id,
      date: req.params.date,
    });

    if (journal) {
      res.status(200).json({ journal });
    }
    res.status(200).json({ message: "Journal doesn't exist" });
  } catch (error) {
    console.log("Error in getDatedUserJournal", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateDatedUserJournal(req, res) {
  try {
    const journal = await Journal.findOne({
      user: req.user.id,
      date: req.params.date,
    });

    if (!journal) {
      res.status(404).json({ message: "Journal doesn't exist" });
    }

    const { title, content } = req.body;
    if (title) journal.title = title;
    if (content) journal.content = content;

    await journal.save();

    res.status(200).json({ message: "Journal successfully updated", journal });
  } catch (error) {
    console.log("Error in updateDatedUserJournal", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteJournal(req, res) {
  try {
    const deletedUser = User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log("Error in deleteJournal", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteAllJournals(req, res) {
  try {
    await User.deleteMany({});

    res.status(200).json({ message: "ALL USERS DELETED 😈" });
  } catch (error) {
    console.log("Error in deleteUser", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
