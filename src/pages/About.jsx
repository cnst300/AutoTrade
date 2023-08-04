import React from "react";
import "../style/About.css";
import Banner from "../assets/banner.jpg";
function About() {
  return (
    <>
      <div className="aboutContainer">
          <img className="imageAboutBanner" src={Banner} alt="about banner" />
        <div className="textAbout">
          <h2>We are AutoTrade.com</h2>
          <p>
            AutoTrade.com is an online platform that caters to individuals
            looking to sell, buy, or rent cars, including luxury and exotic
            supercars. With a user-friendly interface and a vast selection of
            vehicles, AutoTrade.com simplifies the process of finding the
            perfect car or renting a thrilling supercar experience.
            <p>
              Whether you're in the market for a new or used vehicle,
              AutoTrade.com offers a comprehensive marketplace where sellers can
              list their cars, and buyers can browse through a diverse range of
              options, comparing prices, specifications, and reviews.
            </p>
            Additionally, the platform provides a specialized section for those
            seeking the excitement of renting high-performance supercars,
            enabling users to indulge in an unforgettable driving experience.
            AutoTrade.com aims to connect automotive enthusiasts, providing a
            convenient and trustworthy platform for all their automotive needs.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
