import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

interface NavProps {
  onToggleBackground: () => void;
}

function Nav({ onToggleBackground }: NavProps) {
  const [navbarLinksVisible, setNavbarLinksVisible] = useState(true);
  const [firstPanelOpen, setFirstPanelOpen] = useState(false);

  const toggleNavbarLinks = () => {
    setNavbarLinksVisible(!navbarLinksVisible);
  };

  const toggleFirstPanel = () => {
    setFirstPanelOpen(!firstPanelOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNavbarLinksVisible(true);
      } else {
        setNavbarLinksVisible(false);
      }
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="logo-container">
            {" "}
            {/* Newly added container */}
            <span className="logo">Your Logo</span>
            {/* First Panel Toggle Button */}
            <button className="first-panel-toggle" onClick={toggleFirstPanel}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <button
            className="navbar-toggle"
            id="navbar-toggle"
            onClick={toggleNavbarLinks}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="background-toggle">
          <button onClick={onToggleBackground}>Toggle Background</button>
        </div>
        <div
          className={`navbar-links ${navbarLinksVisible ? "visible" : ""}`}
          id="navbar-links"
        >
          <Link className="nav-link" smooth to="/#">
            Home
          </Link>
          <Link className="nav-link" smooth to="/#about">
            About
          </Link>
          <Link className="nav-link" smooth to="/#services">
            Services
          </Link>
          <Link className="nav-link" smooth to="/#contact">
            Contact
          </Link>
        </div>
      </nav>

      {firstPanelOpen && (
        <div className="first-panel-content">This is the first panel.</div>
      )}
    </div>
  );
}

export default Nav;
