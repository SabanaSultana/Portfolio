import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Zoom from "react-reveal/Zoom";
import Menu from "../../components/Menu/Menu";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div className="header" id="Home">
      <Menu />
      <div className="home">
        <div className="leftbar">
          <Fade left>
            <p className="greet">Hello👋, I am</p>
          </Fade>
          <Fade right>
            <p className="name">Sabana Sultana</p>
          </Fade>
          <Fade left>
            <div className="typewriter-container">
              <p>And I am a</p>
              <div className="typewriter-text">
                <Typewriter
                  options={{
                    strings: ["MERN STACK DEVELOPER!", "DATA SCIENCE ENTHUSIAST"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </Fade>
        </div>
        <div className="rightbar">
          <Zoom>
            <div className="avatar-container">
              <img
                src="https://img.freepik.com/premium-photo/teenager-girl-wearing-headphones-studying-laptop-room-blue-neon-lights-lofi-background_938529-705.jpg"
                alt="Avatar"
                className="avatar"
              />
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Home;
