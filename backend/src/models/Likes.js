import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  video: { type: mongoose.Schema.Types.ObjectId, ref: "Videos" },
  created_at: { type: Date, default: Date.now }
});

export const Like = mongoose.model("Likes", LikeSchema);
