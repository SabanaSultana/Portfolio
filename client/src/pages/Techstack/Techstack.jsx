import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <div className="techstack-container">
      <div className="headings">
        <h2>Technology Stack</h2>
        <p>
          👉 Including programming Languages, frameworks, databases, frontend
          and backend tools and APIs..
        </p>
      </div>
      <div className="techstack-items">
        {TechstackList.map((tech) => (
          <div key={tech._id} className="techstack-item">
            <img src={tech.img} alt=""/>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
