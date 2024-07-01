import React, { useEffect, useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    
    >
      <div className="navbar-heading">
        <h1>Portfo<span>lio.</span></h1>
      </div>
      <div className="nav-items">
        <div className="nav-item">Home</div>
        <div className="nav-item">About</div>
        <div className="nav-item">Skills</div>
        <div className="nav-item">Projects</div>
        <div className="nav-item">Contact Me</div>
      </div>
    </div>
  );
};

export default Menu;
