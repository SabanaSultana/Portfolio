import React from "react";
import "./Experience.css";
import { Fade } from "react-awesome-reveal";

const Experience = () => {
  return (
    <div className="experience" id="Experience">
      <h1>Experience</h1>
      <Fade cascade damping={4} delay={2}>
        <div className="experience-list">
          <div className="experience-card">
            <h2>Martian Corporation</h2>
            <h3>Full Stack Developer Intern</h3>
            <p>November 2024 – January 2024</p>
            <ul>
              <li>
                <strong>Role Overview:</strong> Contributing to the development
                of an e-commerce application using React JS, Node JS, Redux,
                etc. Working on features such as product display, user
                authentication, and API integration.
              </li>
              <li>
                Created the complete backend for an EdTech Website using Node
                js, MongoDB database, designed the architecture, and also
                contributed to the frontend side.
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <h2>Aiinhome Technology Pvt Ltd</h2>
            <h3>Frontend Developer Intern</h3>
            <p>July 2024 – October 2024</p>
            <ul>
              <li>
                <strong>Role Overview:</strong> Assisted in the development and
                contributed to various E-Commerce applications.
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Experience;
