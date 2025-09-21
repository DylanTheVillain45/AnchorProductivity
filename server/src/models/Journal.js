import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }, 
});

const Journal = mongoose.model("Journal", journalSchema)

export default Journal