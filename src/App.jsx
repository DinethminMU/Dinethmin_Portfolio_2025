import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Honors from "./Components/Honors";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Project2 from "./Components/Project2";
import Galaxy from './Components/Galaxy';


function App() {
  return (
    <>
     {/* Galaxy background */}
      <div className="fixed inset-0  -z-10" >
        <Galaxy mouseInteraction={false} disableAnimation={false} />
      </div>
      
    
      

      {/* Main content */}
      <section className="relative min-h-screen z-0 flex flex-col">
        



        
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
    </>
  );
}

export default App;