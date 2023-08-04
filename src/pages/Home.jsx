import React from "react";
import "../style/Home.css";
import rentCar from "../assets/rentCar.jpg";
import buyCar from "../assets/sellCar.png";
import { Link } from "react-router-dom";
// import profile from "../assets/profile.png";

function Home() {
  return (
    <div className="container">
      <div className="rental-card">
        <img src={rentCar} className="rentCar" alt="rent" />
        <Link to={"/rent"} className="rentBTN">
          RENT
        </Link>
      </div>
      <div className="buy-card">
        <img src={buyCar} className="buyCar" alt="buy" />
        <Link to={"/buy"} className="buyBTN">
          BUY
        </Link>
      </div>
      <span class="cursor"></span>
      <span class="cursor-trail"></span>
    </div>
  );
}

export default Home;
