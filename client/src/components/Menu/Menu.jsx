import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="navbar">
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
