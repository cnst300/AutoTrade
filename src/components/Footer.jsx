import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../style/Footer.css";

const Footer = () => {
  const socialMediaIcons = [
    { icon: FaFacebook, url: "https://www.facebook.com/autotradecom" },
    { icon: FaTwitter, url: "https://www.twitter.com/autotradecom" },
    { icon: FaInstagram, url: "https://www.instagram.com/autotradecom" },
  ];

  return (
    <div className="social-media-footer">
      {socialMediaIcons.map((item, index) => (
        <a href={item.url} key={index}>
          <item.icon />
        </a>
      ))}
    </div>
  );
};

export default Footer;
