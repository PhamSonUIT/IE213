import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    avatar: String
});

export const User = mongoose.model("Users", userSchema);
