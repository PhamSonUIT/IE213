import React from "react";
import logo from "../asset/img/logoYTBmini.png";
import avt from "../asset/img/logo192.png";
import "../style/Header.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "./Profile";
const Header = () => {
  const backToHome = () => {
    window.location.href = "/";
  };
  return (
    <>
      <div className="header">
        <button>
          <img src={logo} alt="logo" className="logo"  onClick={backToHome}/>
        </button>
        <input type="text" placeholder="search"  />
        <button className="search">
          <FontAwesomeIcon
            title="Search"
            icon={faMagnifyingGlass}
            size="lg"
            style={{ color: "red", padding: "0 10px" }}
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faBell}
            size="2xl"
            style={{
              color: "red",
              padding: "0 10px",
              backgroundColor: "white",
              marginLeft: "50",
            }}
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faVideo}
            size="xl"
            style={{
              color: "red",
              padding: "0 10px",
              backgroundColor: "white",
            }}
          />
        </button>

        <img className="avt" src={avt} alt="avt" onClick={()=> {
          window.location.href = "/profile";
        }} />
      </div>
    </>
  );
};

export default Header;
