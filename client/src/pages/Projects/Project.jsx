import React from "react";
import "./Projects.css";
import { Zoom, Fade, Flip } from "react-awesome-reveal";
import Trend from "../../assets/images/Trend.png";
import Rozgar1 from "../../assets/images/ChatBot1.png"; 
import Rozgar2 from "../../assets/images/ChatBot2.png"; 

const Projects = () => {
  return (
    <div className="projects" id="Project">
      <h1>Top Recent Projects</h1>

      <Fade cascade damping={4} delay={2}>
        <div className="project-list">
          <div className="project-1 project">
            <div className="img rozgarimg">
              <img
                src={Rozgar1}
                alt="Error loading rozgar1 image"
              />
              <img
                src={Rozgar2}
                alt="Error loading rozgar2 image"
              />
            </div>
            <div className="project-description">
              <div className="techs">
                <span>React</span>
                <span>Tailwind</span>
                <span>CSS</span>
              </div>
              <p>
                A sleek and responsive chatbot UI built with modern frontend
                technologies, providing users with an intuitive and interactive
                messaging experience. The interface seamlessly integrates with
                an API to deliver real-time responses and intelligent
                conversation flow. Designed for ease of use, the chatbot
                supports dynamic interactions and ensures smooth communication.
              </p>

              <a href="https://github.com/SabanaSultana/rozgarmitra-23">View</a>
            </div>
          </div>

          <div className="project-2 project">
            <div className="img">
              <img
                src={Trend}
                alt="Error Loading Image"
              />
            </div>
            <div className="project-description">
              <div className="techs">
                <span>React</span>
                <span>Tailwind</span>
              </div>
              <p>
                This is an E-Commerce application's UI. It features a sleek and
                modern design with both dark mode and light mode options. Users
                can easily add items to their cart, remove items, and filter
                products based on categories. The interface is designed to
                provide a seamless shopping experience with intuitive navigation
                and responsive design.
              </p>

              <a href="https://github.com/SabanaSultana/Trend">View</a>
            </div>
          </div>

          <div className="project-3 project">
            <div className="img">
              <img
                src="https://tribulant.com/blog/wp-content/uploads/2017/09/Promote-a-blogging-site.jpg"
                alt=""
              />
            </div>
            <div className="project-description">
              <div className="techs">
                <span>React</span>
                <span>CSS</span>
                <span>Node Js</span>
                <span>MongoDB</span>
              </div>
              <p>
                A full-featured blog application using the MERN stack, offering
                secure user authentication. Users can create, edit, and manage
                their posts effortlessly with a responsive design that works
                across all devices.
              </p>
              <a href="https://github.com/SabanaSultana/Blog-Application-Frontend">
                View
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
