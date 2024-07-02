import React from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <div className="projects" id="Project">
      <Zoom>
        <h1>Top Recent Projects</h1>
      </Zoom>
      <div className="project-list">
        <Fade left>
          <div className="project-1 project">
            <div className="img">
              <img
                src="https://surveysparrow.com/wp-content/uploads/2020/11/Advantages-of-adding-chatbot-for-website-@2x-Copy-1.png"
                alt=""
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

              <Spin>
                <a href="#">View</a>
              </Spin>
            </div>
          </div>
        </Fade>
        <Fade top>
          <div className="project-2 project">
            <div className="img">
              <img
                src="https://geekflare.com/wp-content/uploads/2021/04/online-store-builder.jpg"
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
                An innovative ecommerce platform that offers a seamless shopping
                experience, featuring dynamic product listings, secure payment
                gateways, and real-time inventory management. This full stack
                project involves both frontend and backend development,
                integrating a responsive user interface with a robust
                server-side application to handle business logic and database
                interactions.
              </p>
              <Spin>
                <a href="#">View</a>
              </Spin>
            </div>
          </div>
        </Fade>
        <Fade right>
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
                secure user authentication, rich text editing, and real-time
                commenting. Users can create, edit, and manage their posts
                effortlessly with a responsive design that works across all
                devices. The platform includes personalized user profiles,
                powerful search capabilities, and robust backend support for a
                seamless blogging experience.
              </p>
              <Spin>
                <a href="#">View</a>
              </Spin>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
