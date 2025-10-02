import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Honors from "./Components/Honors";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Project2 from "./Components/Project2";
import star from "./assets/star.jpeg";



function App() {
  return (
    <>
   
     
<img
  src={star}
  alt="star background"
  className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none"
/>

<NavBar />

    
      
    
      

      {/* Main content */}
      <section className="relative min-h-screen z-0 flex flex-col">
        



        
        
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