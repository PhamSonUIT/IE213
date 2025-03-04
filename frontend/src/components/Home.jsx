import React, { useEffect, useState } from "react";
import "../style/Home.css";
import { getUser } from "../api/userService";
import bb3 from "../asset/img/bb3.jpg";
import avt from "../asset/img/logo192.png";

const Home = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUser();
        // console.log("test:", response.data.user);
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div className="home">
      {users.map((user) => (
        <div key={user._id} className="videoList">
          <img className="thumbnail" src={bb3} alt="Thumbnail" />
          <div className="videoInfo">
            <img src={avt} alt="Avatar" className="avatar" />
            <div className="videoText">
              <a className="videoTitle">Test video list</a>
              <h5 className="videoChannel">
                <a href="#">{user.username}</a>
              </h5>
              <span className="videoViews">5k views</span>
              <span className="videoTime">10 hours ago</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
