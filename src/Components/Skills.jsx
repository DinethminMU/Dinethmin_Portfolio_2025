import React from "react";

const skills = [
  "Java",
  "Python",
  "C#",
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Spring Boot",
  "MySQL",
  "Git",
  "ASP.NET",
  "Docker",
  "AWS"
];

function Skills() {
  return (
    <section id="skills" className="relative py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, idx) => {
          // Random animation delay between 0s and 2s
          const delay = (Math.random() * 2).toFixed(2);
          return (
            <div
              key={idx}
              className="relative flex items-center justify-center h-24 rounded-2xl bg-white/10 border border-white/20 shadow-lg backdrop-blur-xl group hover:scale-110 hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 skill-float"
              style={{ animationDelay: `${delay}s` }}
            >
              <span className="font-semibold text-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {skill}
              </span>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 blur-2xl z-[-1]" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;