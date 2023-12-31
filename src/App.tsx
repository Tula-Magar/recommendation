import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

// import logo from "./logo.svg";
import "./App.css";

import Nav from "./General/Nav";
import Home from "./General/Home";
import ResponsiveThreePanelPage from "./Layout/ResponsiveThreePanelPage";
import useScrollToTop from "./General/useScrollToTop";

function App() {
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(false);

  useEffect(() => {
    const preference = Cookies.get("colorPreference");
    if (preference === "blackAndWhite") {
      setIsBlackAndWhite(true);
    }
  }, []);

  const handleToggleBackground = () => {
    setIsBlackAndWhite((prevState) => {
      const newPreference = prevState ? "white" : "black";
      Cookies.set("colorPreference", newPreference, { expires: 365 }); // Store preference for 1 year
      return !prevState;
    });
  };

  return (
    <div
      data-testid="app-container"
      className={isBlackAndWhite ? "black" : "white"}
    >
      <Router>
        <Nav onToggleBackground={handleToggleBackground} />
        <ScrollToTopWrapper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<ResponsiveThreePanelPage />} />
        </Routes>
      </Router>
    </div>
  );
}
function ScrollToTopWrapper() {
  useScrollToTop();
  return null;
}
export default App;
