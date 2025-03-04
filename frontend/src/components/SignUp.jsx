import React, { useEffect, useState } from "react";
import "../style/SignUp.css";
import { toast } from "react-toastify";
import { signUp } from "../api/authService";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await signUp({ username, email, password });
      console.log(response.status);
      if (response.status === 200) {
        console.log(response);
        toast.success(response.data.message);
      } else {
        console.log(response.status);
      }
    } catch (error) {
      console.log(error);
      if (error.status === 403) {
        toast.error("User already exists");
      } else {
        toast.error("Server error");
      }
    }
  };
  return (
    <>
      <div className="signUp">
        <form action="" onSubmit={handleSignUp}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label>Password:</label>
          <input
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />

          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </>
  );
};

export default SignUp;
