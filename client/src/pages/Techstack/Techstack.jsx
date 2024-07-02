import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";
import Fade from "react-reveal/Fade";


const Techstack = () => {
  return (
    <div className="techstack-container" id="Skills">
      <Fade left>
        <div className="headings">
          <h2>Technology Stack</h2>
          <p>
            👉 Including programming Languages, frameworks, databases, frontend
            and backend tools and APIs..
          </p>
        </div>
      </Fade>
        <div className="techstack-items">
          {TechstackList.map((tech) => (
            <Fade bottom >
            <div key={tech._id} className="techstack-item">
              <img src={tech.img} alt="" />
              <p>{tech.name}</p>
            </div>
            </Fade>
          ))}
        </div>
    </div>
  );
};

export default Techstack;
