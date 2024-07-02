import { useState } from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Project from "./pages/Projects/Project";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Layout />
      <About />
      <Project />
      <Techstack/>
      <Contact />
    </>
  );
}

export default App;
