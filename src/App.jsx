import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Honors from "./Components/Honors";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Project2 from "./Components/Project2";
import Galaxy from "./Components/Galaxy";

function App() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background covers everything */}
      <div className="absolute inset-0 w-screen h-full -z-10">
        <Galaxy mouseInteraction={false} disableAnimation={false} />
      </div>

      {/* NavBar always on top, but still above background */}
      <NavBar />

      {/* Main content, padding top to offset fixed NavBar */}
      <section className="relative z-0 flex flex-col pt-28">
        <Hero />
        <About />
        <Education />
        <Project2 />
        <Skills />
        <Honors />
        <Contact />
        <Footer />
      </section>
    </div>
  );
}

export default App;