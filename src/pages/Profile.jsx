import React, { useEffect, useState } from "react";
import "../style/Profile.css";
import axios from "axios";

const LOGOUT_URL = "http://localhost:8000/auth/logout";
const token = localStorage.getItem("token");
const user= localStorage.getItem("user");

function Profile() {
  const [loggedout, setIsLoggedOut] = useState();
  const [user, setUser] = useState();

  const handleAdmin = async (e) =>{
    try {
      const response = await fetch(LOGOUT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });
      if (response.ok) {
        const responseJson = await response.json();
        console.log(
          responseJson
        );
        window.location.replace("/admin");
    }
  } catch (error) {
      
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(LOGOUT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      if (response.ok) {
        setIsLoggedOut(true);
        localStorage.clear();
        window.location.replace("/home");
        //
      } else {
        console.log("Error");
        alert("Logout failed:", response.statusText);
      }
    } catch (err) {}
  };

  const getData = () => {
    axios.get("http://localhost:8000/auth/profile").then((res) => {
      console.log("🚀 ~ file: Profile.jsx:14 ~ axios.get ~ res:", res);
      console.log(res.data);
      setUser(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {user ? (
        <div className="profileContainer">
          <div className="upHalfProfile">
            <img src="" alt="profile picture user logged in" />
            <h3>Firstname</h3>
            <h3>Lastname</h3>
            <h5>Email</h5>
            <h5>Role</h5>
          </div>
          <div className="downHalfProfile">A list of active announcements.</div>
          <button className="logout" onClick={handleSubmit}>
            Logout
          </button>
          <button className="logout" onClick={handleAdmin}>
            Admin
          </button>
          
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </>
  );
}

export default Profile;
