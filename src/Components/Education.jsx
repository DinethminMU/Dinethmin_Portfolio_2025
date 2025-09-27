import React from "react";

const educationData = [
  {
    degree: "BSc (Hons) in Computer Science",
    institution: "University of Colombo School of Computing",
    year: "2023 - Present",
    description: "Currently pursuing my undergraduate degree with an interest on Software Developement, Data Science, AI and Machine Learning.",
  },
  {
    degree: "G.C.E. Advanced Level – Physical Science Stream",
    institution: "Royal College, Colombo",
    year: "2023",
    description: "Specialized in Combined Mathematics, Physics, and Chemistry. Achieved excellent results and got selected for the University of Colombo. ",
  },
  {
    degree: "G.C.E. Ordinary Level",
    institution: "Royal College, Colombo",
    year: "2017",
    description: "Completed with ( 9 A's ) including Mathematics, Science, and English.",
  },
];

function Education() {
  return (
    <section id="education" className="relative py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Education
      </h2>
      <div className="space-y-8">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="relative bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 backdrop-blur-xl hover:scale-[1.025] transition-transform"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {edu.degree}
                </h3>
                <p className="text-white/80 font-medium">{edu.institution}</p>
              </div>
              <span className="mt-2 md:mt-0 text-cyan-300 font-semibold text-sm md:text-base">
                {edu.year}
              </span>
            </div>
            <p className="mt-3 text-white/70">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;