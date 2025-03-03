import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  video: { type: mongoose.Schema.Types.ObjectId, ref: "Videos" },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

export const Comment = mongoose.model("Comments", CommentSchema);
