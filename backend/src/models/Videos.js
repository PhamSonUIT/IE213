import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  video_name: { type: String, required: true },
  thumbnail: { type: String },
  description: { type: String },
  views: { type: Number, default: 0 },
  type: { type: mongoose.Schema.Types.ObjectId, ref: "VideoTypes" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  source: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

export const Video = mongoose.model("Videos", VideoSchema);
