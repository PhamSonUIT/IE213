import { User } from "../models/Users.js";
import connectDB from "../config/db.js";

connectDB();
const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      avatar: req.body.avatar,
    });

    const userExist = await User.findOne({ email });
    if (userExist) {
      console.log("User already exists");
      res.status(400).json({ message: "User already exists" });
      return;
    }

    await newUser.save();
    res.status(201).json({ message: "User created successfully", newUser });
    // console.log(res.data.message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
const signIn = async (req,res) => {
    const { email, password } = req.body;
    const userExist = await User.findOne({email});
    if(!userExist){
        res.status(400).json({message: "User not found"});
        return;
    }
    if(userExist.password !== password){
        res.status(400).json({message: "Login failed"});
        return;
    }
};

export { signUp };
