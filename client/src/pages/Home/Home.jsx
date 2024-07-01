import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="home">
      <div className="leftbar">
        <p className="greet">Hello, I am</p>
        <p className="name">Sabana Sultana</p>
        <div className="typewriter-container">
          <p>And I am a</p>
          <div className="typewriter-text">
            <Typewriter
              options={{
                strings: ["MERN STACK DEVELOPER", "ML ENTHUSIAST"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
      <div className="rightbar">
        <div className="avatar-container">
          <img
            src="https://img.freepik.com/premium-photo/teenager-girl-wearing-headphones-studying-laptop-room-blue-neon-lights-lofi-background_938529-705.jpg"
            alt="Avatar"
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
