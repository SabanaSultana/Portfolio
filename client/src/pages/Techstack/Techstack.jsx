import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";
import { Zoom, Fade, Flip } from "react-awesome-reveal";

const Techstack = () => {
  return (
    <div className="techstack-container" id="Skills">
      <div className="headings">
        <h2>Technology Stack</h2>
        <p>
          👉 Including programming Languages, frameworks, databases, frontend
          and backend tools and APIs..
        </p>
      </div>
      <Fade cascade damping={1} delay={1500}>
        <div className="techstack-items">
          {TechstackList.map((tech) => (
            <div key={tech._id} className="techstack-item">
              <img src={tech.img} alt="" />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Techstack;
