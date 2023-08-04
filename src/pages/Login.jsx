import React, { useEffect, useRef, useState } from "react";
import Profile from "../pages/Profile";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LOGIN_URL = "http://localhost:8000/auth/login";

function Login({ isLoggedIn, setIsLoggedIn }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errMessage, setErrMessage] = useState("");


  const errRef = useRef(null);
  const nav = useNavigate();

  const handleRegisterClick = () => {
    nav("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const responseJson = await response.json();
        console.log(
          "🚀 ~ file: ModalLogin.jsx:90 ~ handleSubmit ~ responseJson:",
          responseJson
        );

        const token = responseJson.token;
        console.log(
          "🚀 ~ file: ModalLogin.jsx:91 ~ handleSubmit ~ token:",
          token
        );

        // Save the token in local storage or state, and use it for subsequent requests

        localStorage.setItem("token", token);

        setLoginSuccess(true);
        setIsLoggedIn(true);

        window.location.replace("/profile");
        //
      } else {
        console.log("Error");
        // Login failed, handle the error
        alert("Login failed:", response.statusText);
      }
    } catch (err) {
      if (!err?.response) {
        setErrMessage("No Server Response");
      } else if (err.response?.status === 500) {
        setErrMessage("Login Failed");
      }
      errRef.current.focus();
    }
  };


  return (
    <>
      {loginSuccess ? (
        <Profile />
      ) : (
        <div className="openLoginModal">
          <p
            ref={errRef}
            className={errMessage ? "errmsg" : "offscreen"}
            aria-live="assertive">
            {errMessage}
          </p>
          <div className="login-container">
            <div className="login-info">
              <form action="/submit-form" className="formLogin">
                <label>
                  <b>Email</b>
                </label>
                <input
                  name="email"
                  placeholder="Enter Email"
                  required
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>
                  <b>Password</b>
                </label>
                <input
                  name="password"
                  placeholder="Enter Password"
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login" type="submit" onClick={handleSubmit}>
                  Login
                </button>
                <div className="login-bottom-container">
                  <span className="psw">
                    Forgot <a href="/forgottenPassword">password?</a> &nbsp;
                    &#124; &nbsp; Create{" "}
                    <a href="#openRegisterModal" onClick={handleRegisterClick}>
                      Account
                    </a>
                  </span>
                </div>
                <a className="login-modal-close" href="#close">
                  Cancel
                </a>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
