import React from "react";

function About() {
  return (
    <section id="about" className="relative py-16 px-4 max-w-5xl mx-auto ">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 backdrop-blur-xl">
        <p className="text-white/80 text-lg mb-4">
          Hi! I’m <span className="font-bold text-cyan-300">Dinethmin Manditha</span>, a passionate software developer and tech enthusiast from Sri Lanka. I love building modern web applications, exploring AI/ML, and solving real-world problems with code.
        </p>
        <p className="text-white/70 text-lg mb-4">
          I’m currently pursuing my BSc (Hons) in Computer Science at SLIIT. My interests span full-stack development, cloud computing, and innovative UI/UX. I enjoy collaborating on open-source projects and participating in hackathons.
        </p>
        <p className="text-white/70 text-lg">
          Outside of coding, you’ll find me reading about new tech trends, experimenting with side projects, or enjoying a good cup of coffee. I’m always eager to learn, grow, and connect with peers who share my passion for technology!
        </p>
      </div>
    </section>
  );
}

export default About;