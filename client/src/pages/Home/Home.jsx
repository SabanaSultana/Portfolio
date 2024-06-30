import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/Sabana Sultana Resume - Copy.pdf'

const Home = () => {
  return (
    <>
     <div className="container-fluid home-container">
      <div className="container home-content">
        <h1>Hii  👋 I am a </h1>
        <h2>
          <Typewriter
            options={{
              strings: ['Full Stack Developer!', 'Mern Stack Developer !'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div className="buttons">
          <button className='btn'>Hire Me</button>
          <a className='btn' href={Resume} download="SabanaSultana Resume.pdf">Resume</a>
        </div>
      </div>
     </div>
    </>
  )
}

export default Home
