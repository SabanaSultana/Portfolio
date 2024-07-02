import React from "react";
import "./About.css";
import userImage from "../../assets/images/User_img.png";
import Resume from "../../assets/docs/Sabana Sultana Resume - Copy.pdf";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const About = () => {
  return (
    <div className="about-section">
      <h1>About Me</h1>
      <div className="title">
        <p></p>
        <span className="txt">Who I am</span>
        <p></p>
      </div>
      <div className="about-me">
        <div className="description">
          <p>
            I am Sabana Sultana, I am doing my BTech from Aliah University
            (2021-2025) and my specialization is Computer Science and
            Engineering with an overall cgpa of 8.8. I have strong knowledge in
            MERN stack development and experience in tech stacks such as React,
            Node.js, Express, and MongoDB. I have contributed to projects
            including the Rozgar Mitra chatbot and an e-commerce website.
            Additionally, I am a ML and data science enthusiast with expertise
            in data gathering, cleaning, and analysis using Python, NumPy,
            pandas, and Matplotlib. I have a solid understanding of various
            machine learning algorithms and their applications. My passion for
            technology drives me to continuously learn and innovate, aiming to
            solve real-world problems through my technical skills and
            collaborative efforts.
          </p>
          <a href={Resume} download="Sabana_Sultana_Resume.pdf">
            Resume
          </a>
        </div>
        <div className="img">
          <img src={userImage} alt="user image" />
          <div className="profiles">
            <a
              href="https://www.linkedin.com/in/sabana-sultana-273b36232/"
              className="linkedin"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/SabanaSultana?tab=overview&from=2024-07-01&to=2024-07-02"
              className="github"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/Sabana_544_Sultana/"
              className="leetcode"
            >
              <img
                src="https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
