import React, { useEffect, useState } from "react";
import "./Menu.css";
import { Link } from "react-scroll";
import { Zoom, Fade, Flip } from "react-awesome-reveal";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-heading">
        <h1>
          <span>🤝</span>
          Portfo<span>lio.</span>
        </h1>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <div className={`nav-items ${menuOpen ? "nav-items-open" : ""}`}>
        <Link
          to="Home"
          spy={true}
          smooth={true}
          hashSpy={true}
          duration={600}
          onClick={toggleMenu}
        >
          <div className="nav-item">Home</div>
        </Link>
        <Link
          to="About"
          spy={true}
          smooth={true}
          hashSpy={true}
          duration={600}
          offset={-100}
          onClick={toggleMenu}
        >
          <div className="nav-item">About</div>
        </Link>
        <Link
          to="Skills"
          spy={true}
          smooth={true}
          hashSpy={true}
          duration={600}
          offset={-80}
          onClick={toggleMenu}
        >
          <div className="nav-item">Skills</div>
        </Link>
        <Link
          to="Project"
          spy={true}
          smooth={true}
          hashSpy={true}
          duration={600}
          offset={-50}
          onClick={toggleMenu}
        >
          <div className="nav-item">Projects</div>
        </Link>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          hashSpy={true}
          duration={600}
          offset={-100}
          onClick={toggleMenu}
        >
          <div className="nav-item">Contact Me</div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
