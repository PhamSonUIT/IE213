import { User } from "../models/Users.js";
import connectDB from "../config/db.js";

connectDB();
const createUser = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      avatar: req.body.avatar,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "/error" });
  }
};

const login = (req,res)=>{
  try {
    const { email, password } = req.body;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export { createUser, getUser };
