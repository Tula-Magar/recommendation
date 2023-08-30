import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import logo from "./logo.svg";
import "./App.css";

import Nav from "./Nav";
import Home from "./Home";

function App() {
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(false);
  // Load user preference from cookie when the component mounts
  useEffect(() => {
    const preference = Cookies.get("colorPreference");
    if (preference === "blackAndWhite") {
      setIsBlackAndWhite(true);
    }
  }, []);

  // Update user preference and cookie when the toggle button is clicked
  const handleToggleBackground = () => {
    setIsBlackAndWhite((prevState) => {
      const newPreference = prevState ? "color" : "blackAndWhite";
      Cookies.set("colorPreference", newPreference, { expires: 365 }); // Store preference for 1 year
      return !prevState;
    });
  };

  return (
    <div
      data-testid="app-container"
      className={isBlackAndWhite ? "black-and-white" : "color"}>
      <Router>
        <Nav onToggleBackground={handleToggleBackground} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
