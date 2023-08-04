import "../src/style/App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rent from "./pages/Rent";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
// import AnimatedCursor from "react-animated-cursor";
import ForgottenPassword from "./components/ForgottenPassword";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* <AnimatedCursor
        innerSize={20}
        outerSize={30}
        color="10, 10, 10"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      /> */}
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/profile" element={<Profile setIsLoggedIn={true} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgottenPassword" element={<ForgottenPassword />} />
      </Routes>
      <div className="App"></div>
    </>
  );
}

export default App;
