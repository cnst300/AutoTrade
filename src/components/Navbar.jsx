import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Navbar.css";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const nav = useNavigate();

  const [mobileNavbar, setMobileNavbar] = useState(false);

  function toggleHamburger() {
    setMobileNavbar((prevState) => !prevState);
  }

  const handleLoginClick = () => {
    nav("/login");
  };

  const token = localStorage.getItem("token");
  console.log(token);

//   const logout =async (e) => {
//   try {
//   console.log(token);

//     const response = await fetch("http://localhost:8000/auth/logout",{
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer "+ token,
//       },
//       body: JSON.stringify(token),
//     });

//     if (response.ok) {
//       console.log("ok");
//       localStorage.clear();
//     } else {
//       console.log("Error");
//       alert("Login failed:", response.statusText);
//     }
//   } catch (err) {
//   }
// };

  const handleRegisterClick = () => {
    nav("/register");
  };

  return (
    <nav className="navbar">
      <div id="trapezoid">
        <a className="sub-home" href="/home">
          Home
        </a>
        <div className="subnav">
          <button className="subnavbtn">
            Sign In<i className="fa fa-caret-down"></i>
          </button>
          <div className="subnav-content">
            <div id="subnav-trapezoid">
              <a href="/login" onClick={handleLoginClick}>
                Login
              </a>
              {/* <a href="/profile">Profile</a> */}
              {isLoggedIn ? (
                <a href="/profile">Profile</a>
              ) : (
                <a href="/register" onClick={handleRegisterClick}>
                  Register
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="subnav">
          <button className="subnavbtn">
            Services<i className="fa fa-caret-down"></i>
          </button>
          <div className="subnav-content">
            <div className="subnav-trapezoid">
              <a href="/rent">Rent A Car</a>
              <a href="/sell">Sell</a>
              <a href="/buy">Buy</a>
            </div>
          </div>
        </div>
        <a href="/about" className="expandHome">
          About
        </a>
        <a href="/contact" className="expandHome">
          Contact
        </a>
      </div>
      <div className="hamburger-btn" onClick={toggleHamburger}>
        |||
      </div>
      {mobileNavbar && (
        <div className="mobile-nav">
          <a className="button-home" href="/home">
            Home
          </a>

          <a className="button-rent" href="/rent">
            Rent
          </a>
          <a className="button-sell" href="/sell">
            Sell
          </a>
          <a className="button-buy" href="/buy">
            Buy
          </a>

          <a className="button-about" href="/about">
            About
          </a>
          <a className="button-contact" href="/contact">
            Contact
          </a>

          <div class="dropdown">
            <button class="dropbtn">Profile</button>
            <div class="dropdown-content">
              <a className="button-login" href="/login">
                Sign in
              </a>
              <a className="button-register" href="/register">
                Sign up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;