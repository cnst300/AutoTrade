import React, { useEffect, useRef, useState } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Register.css";

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,50}$/;
const NAME_REGEX = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const REGISTER_URL = "http://localhost:8000/auth/register";

function Register({
  isLoggedIn,
  setIsLoggedIn,
}) {
  const userRef = useRef();
  const errRef = useRef();
  const nav = useNavigate();

  const handleLoginClick = () => {
    nav("/login");
  };

  const [firstname, setFirstname] = useState("");
  const [validFirstname, setValidFirstname] = useState(false);
  const [firstnameFocus, setFirstnameFocus] = useState(false);

  const [lastname, setLastname] = useState("");
  const [validLastname, setValidLastname] = useState(false);
  const [lastnameFocus, setLastnameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMessage, setErrMessage] = useState("");
  const [success, setSuccess] = useState(false);

  // focus, where the user typing

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // useEffect to set the first name

  useEffect(() => {
    setValidFirstname(NAME_REGEX.test(firstname));
  }, [firstname]);

  // useEffect to set the surname
  useEffect(() => {
    setValidLastname(NAME_REGEX.test(lastname));
  }, [lastname]);

  // useEffect to set the email

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  // useEffect to check if passwords match and to set it

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  // useEffect to send error messages
  useEffect(() => {
    setErrMessage("");
  }, [email, password, matchPassword, firstname, lastname]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMessage("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        {
          firstname,
          lastname,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setMatchPassword("");
    } catch (err) {
      if (!err?.response) {
        setErrMessage("No Server Response");
      } else if (err.response?.status === 503) {
        setErrMessage("Username Taken");
      } else {
        setErrMessage("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section className="success">
          <h1>
            Success! <br />
            You can now log in!
          </h1>
          <p>
            <a href="/login">
              <button className="buttonAfterRegister">Sign in</button>
            </a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMessage ? "errmsg" : "offscreen"}
            aria-live="assertive">
            {errMessage}
          </p>
            <div className="register-container">
              <div className="register-info">
                <form
                  action="/submit-form"
                  className="registerForm"
                  onSubmit={handleSubmit}>
                  <label htmlFor="firstName">
                    First Name:
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validFirstname ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validFirstname || !firstname ? "hide" : "invalid"
                      }
                    />
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                    required
                    aria-invalid={validFirstname ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setFirstnameFocus(true)}
                    onBlur={() => setFirstnameFocus(false)}
                  />
                  <p
                    id="uidnote"
                    className={
                      firstnameFocus && firstname && !validFirstname
                        ? "instructions"
                        : "offscreen"
                    }>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Min 3 characters. Must begin with a letter.
                    <br />
                    Only letters allowed!.
                  </p>
                  <label htmlFor="firstName">
                    Lastname:
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validLastname ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validLastname || !lastname ? "hide" : "invalid"
                      }
                    />
                  </label>
                  <input
                    type="text"
                    id="Lastname"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                    required
                    aria-invalid={validLastname ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setLastnameFocus(true)}
                    onBlur={() => setLastnameFocus(false)}
                  />
                  <p
                    id="uidnote"
                    className={
                      lastnameFocus && lastname && !validLastname
                        ? "instructions"
                        : "offscreen"
                    }>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Min 3 characters. Must begin with a letter.
                    <br />
                    Only letters allowed!.
                  </p>
                  <label htmlFor="email">
                    Email:
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validEmail ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validEmail || !email ? "hide" : "invalid"}
                    />
                  </label>
                  <input
                    type="text"
                    id="Email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  />
                  <p
                    id="uidnote"
                    className={
                      emailFocus && email && !validEmail
                        ? "instructions"
                        : "offscreen"
                    }>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 50 characters. Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                  </p>
                  <label htmlFor="password">
                    Password:
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validPassword ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validPassword || !password ? "hide" : "invalid"
                      }
                    />
                  </label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    aria-invalid={validPassword ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                  />
                  <p
                    id="pwdnote"
                    className={
                      passwordFocus && !validPassword
                        ? "instructions"
                        : "offscreen"
                    }>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character.
                    <br />
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </p>
                  <label htmlFor="confirm_pwd">
                    Confirm Password:
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validMatch && matchPassword ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validMatch || !matchPassword ? "hide" : "invalid"
                      }
                    />
                  </label>
                  <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPassword(e.target.value)}
                    value={matchPassword}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                  <p
                    id="confirmnote"
                    className={
                      matchFocus && !validMatch ? "instructions" : "offscreen"
                    }>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                  </p>
                  <button
                    className="register"
                    disabled={
                      !validEmail || !validPassword || !validMatch
                        ? true
                        : false
                    }>
                    Register
                  </button>
                  <div className="register-bottom-container"></div>
                  <a className="register-modal-close" href="#close">
                    Cancel
                  </a>
                </form>
                <p className="line">
                  Already registered?
                  <br />
                  <span className="line">
                    {/*put router link here*/}
                    <a href="#openLoginModal" onClick={handleLoginClick}>
                      Sign In
                    </a>
                  </span>
                </p>
              </div>
            </div>
    
        </section>
      )}
    </>
  );
}

export default Register;
