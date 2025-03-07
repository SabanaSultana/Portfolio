import { useState } from "react";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Project from "./pages/Projects/Project";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Experience from "./pages/Experience/Experience";

function App() {
  return (
    <>
      <Home/>
      <About />
      <Experience />
      <Techstack />
      <Project />
      <Contact />
      <Footer/>
      <ScrollToTop smooth  style={{ backgroundColor: "#FF0000" }} />
    </>
  );
}

export default App;
