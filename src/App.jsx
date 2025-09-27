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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for window load event (all assets, including video, are loaded)
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        {/* Simple spinner */}
        <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section>
      <video src={video} autoPlay loop muted playsInline className="fixed inset-0 min-w-full min-h-full w-auto h-auto object-cover z-[-10] bg-black" />
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