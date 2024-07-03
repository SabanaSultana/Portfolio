import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Menu from "../../components/Menu/Menu";
import { Zoom, Fade, Flip } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="header" id="Home">
      <Menu />
      <div className="home">
        <div className="leftbar">
          <p className="greet">Hello👋, I am</p>
          <p className="name">Sabana Sultana</p>
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
