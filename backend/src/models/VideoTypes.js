import mongoose from "mongoose";

const VideoTypeSchema = new mongoose.Schema({
  type_name: { type: String, required: true }
});

export const VideoType = mongoose.model("VideoTypes", VideoTypeSchema);
