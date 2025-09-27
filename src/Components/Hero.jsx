import React from "react";
import profilePic from "../assets/profile.jpeg";
import cvFile from "../assets/Dinethmin-Uduwilaarachchi-Resume.pdf"; // Place your CV PDF in src/assets/
import { Typewriter } from 'react-simple-typewriter';


function Hero() {
  return (
    <section id="home"  className="relative flex flex-col items-center justify-center min-h-[70vh] py-12 px-4 text-center overflow-visible">
      {/* Blurred animated gradient background */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      </div>
      {/* Profile Picture with animated circular ring */}
      <div className="relative mb-6 flex items-center justify-center">
        <span className="pulse-ring"></span>
        <img
          src={profilePic}
          alt="Profile"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-white/30 shadow-xl object-cover bg-white/10 backdrop-blur-lg object-[50%_20%]"
        />
      </div>
      {/* Name and Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-2 drop-shadow">
        Dinethmin Manditha
      </h1>
      <h2 className="text-lg md:text-2xl text-white/80 font-medium mb-4">
      
       <Typewriter
    words={['Software Developer', 'AI/ML Enthusiast', 'Tech Lover']}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={80}
    deleteSpeed={80}
    delaySpeed={1500}
  />
        
      </h2>
      {/* Animated gradient underline */}
      <div className="mx-auto w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-pulse mb-6"></div>
      {/* Short Bio */}
      <p className="max-w-xl mx-auto text-white/70 text-base md:text-lg mb-6">
        Passionate about building modern web experiences, solving real-world problems, and always learning new technologies. Welcome to my Portfolio for 2025
      </p>
      {/* Download CV Button */}
      <a
        href={cvFile}
        download
        className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:from-pink-400 hover:to-yellow-400 transition-all duration-200"
      >
        Download CV
      </a>
    </section>
  );
}

export default Hero;