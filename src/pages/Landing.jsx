import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../style/Landing.css";
import { Link } from "react-router-dom";

function Landing() {

  // const [animationPaused, setAnimationPaused] = useState(false);

  // const handleAnimationEnd = () => {
  //   setAnimationPaused(true);
  // };

  // const handleAnimationRestart = () => {
  //   setAnimationPaused(false);
  // };
  return (
    <div className="landingPage">
      <header className="landingHeader">
        <img src={logo} className="logoLanding" alt="logo" />
        <Link to={"/home"} className="homepageBTN">
          Visit our Homepage
        </Link>
      </header>
    </div>

    // nex version feature

    // <div className={`container ${animationPaused ? 'paused' : ''}`}>
    //   <div class="box">
    //     <span style={{ "--i": 1 }}>
    //       <i>AUTO</i>
    //       TRADE
    //       <i>.COM</i>
    //     </span>
    //     <span style={{ "--i": 2 }}>
    //       <i>AUTO</i>
    //       TRADE
    //       <i>.COM</i>
    //     </span>
    //     <span style={{ "--i": 3 }}>
    //       <i>AUTO</i>
    //       TRADE
    //       <i>.COM</i>
    //     </span>
    //     <span style={{ "--i": 4 }}>
    //       <i>AUTO</i>
    //       TRADE
    //       <i>.COM</i>
    //     </span>
    //     <span style={{ "--i": 5 }}>
    //       <i>AUTO</i>
    //       TRADE
    //       <i>.COM</i>
    //     </span>
    //     <span style={{ "--i": 6 }}>
    //       <i>AUTO</i>
    //       TRADE
    //       <i>.COM</i>
    //     </span>
    //     <span style={{ "--i": 7 }}>
    //       <i>AUTO</i>
    //       TRADE
    //       <i>.COM</i>
    //     </span>
    //     <span style={{ "--i": 8 }}>
    //       <i>AUTO</i>
    //       TRADE
    //       <i>.COM</i>
    //     </span>
    //     <span style={{ "--i": 9 }}>
    //       <i>AUTO</i>
    //       TRADE
    //       <i>.COM</i>
    //     </span>
    //     <span style={{ "--i": 10 }}>
    //       <i>AUTO</i>
    //       TRADE
    //       <i>.COM</i>
    //     </span>
    //     <span style={{ "--i": 11 }}>
    //       <i>AUTO</i>
    //       TRADE
    //       <i>.COM</i>
    //     </span>
    //     <span style={{ "--i": 12 }}>
    //       <i>AUTO</i>
    //       TRADE
    //       <i>.COM</i>
    //     </span>
    //     <span style={{ "--i": 13 }}>
    //       <i>AUTO</i>
    //       TRADE
    //       <i>.COM</i>
    //     </span>
    //     <span style={{ "--i": 14 }}>
    //       <i>AUTO</i>
    //       TRADE
    //       <i>.COM</i>
    //     </span>
    //     <span style={{ "--i": 15 }}>
    //       <i>AUTO</i>
    //       TRADE
    //       <i>.COM</i>
    //     </span>
    //     <span style={{ "--i": 16 }}>
    //       <i>AUTO</i>
    //       TRADE
    //       <i>.COM</i>
    //     </span>
    //   </div>
    // </div>
  );
}

export default Landing;
