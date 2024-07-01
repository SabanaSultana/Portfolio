import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="home">
      <div className="leftbar">
        <p className="greet">Hii 👋, I am </p>
        <p className="name">Sabana Sultana</p>
        <div className="typewriter-container">
          <p>And I am a</p>
          <div className="typewriter-text">
            <Typewriter
              options={{
                strings: ["MERN Stack Developer!", "Data Science Enthusiast."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
      <div className="rightbar"></div>
    </div>
  );
};

export default Home;
