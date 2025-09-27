import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import video from "./assets/galaxy.mp4";
import Hero from "./Components/Hero";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Honors from "./Components/Honors";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Project2 from "./Components/Project2";

function App() {


  return (
    <section className="min-h-screen bg-black">
      <video src={video} autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover z-[-10] bg-black" />
      <NavBar />
      <div className="mt-28"></div>
      <Hero/>
      <About/>
      <Education/>
      <Project2/>
      <Skills/>
      <Honors/>
      <Contact/>
      <Footer/>
    </section>
  );
}

export default App;