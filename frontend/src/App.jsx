import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import PlayVideo from "./components/PlayVideo.jsx";
import Login from "./components/SignUp.jsx";
import { ToastContainer, toast } from "react-toastify"; // import thư viện toastify
// import css cho toastify
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <Router>
        <ToastContainer position="bottom-right" />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/playvideo" element={<PlayVideo />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
