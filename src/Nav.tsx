import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./App.css";

function Nav() {
  const [navbarLinksVisible, setNavbarLinksVisible] = useState(true);

  const toggleNavbarLinks = () => {
    setNavbarLinksVisible(!navbarLinksVisible);
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
          <span className="logo">Your Logo</span>
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
        <div
          className={`navbar-links ${navbarLinksVisible ? "visible" : ""}`}
          id="navbar-links"
        >
          <Link className="link" smooth to="/#">
            Home
          </Link>
          <Link className="link" smooth to="/#about">
            About
          </Link>
          <Link className="link" smooth to="/#services">
            Services
          </Link>
          <Link className="link" smooth to="/#contact">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
