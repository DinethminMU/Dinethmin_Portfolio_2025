import React from "react";

const honors = [
  {
    title: "Dean's List Award",
    year: "2023",
    description: "Recognized for outstanding academic performance at SLIIT.",
    emoji: "🏅",
  },
  {
    title: "Hackathon Winner",
    year: "2024",
    description: "1st Place at ReidXtreme 4.0 Competitive Programming Hackathon organized by University of Colombo School of Computing. ",
    emoji: "🚀",
  },
  {
    title: "Hackathon Winner",
    year: "2025",
    description: "1 st Place at UOJCoders 2025 Hackathon organized by University of Jaffna.",
    emoji: "🚀",
  },
  {
    title: "Hackathon Finalist",
    year: "2025",
    description: "Selected as a finalist at SLIIT Algothon 2025 Competitive Programming Competition. ",
    emoji: "🚀",
  },
];

function Honors() {
  return (
    <section id="honors" className="relative py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-500 bg-clip-text text-transparent">
        Honors & Awards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {honors.map((honor, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center justify-center bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 backdrop-blur-xl hover:scale-105 transition-transform group"
          >
            <div className="text-5xl mb-2 animate-bounce group-hover:animate-spin-slow">{honor.emoji}</div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
              {honor.title}
            </h3>
            <span className="text-cyan-300 font-semibold text-sm mb-1">{honor.year}</span>
            <p className="text-white/80 text-center">{honor.description}</p>
          </div>
        ))}
      </div>
      {/* Emoji spin animation on hover */}
      <style>
        {`
          .group:hover .animate-spin-slow {
            animation: spin 2s linear infinite;
          }
        `}
      </style>
    </section>
  );
}

export default Honors;