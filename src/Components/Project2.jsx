import React from "react";
// Import your project images
import Vet from "../assets/Vetcare.jpg";
import mandela from "../assets/ecommerce.jpeg";
import DSL from "../assets/dsl.jpeg";

const projects = [
  {
    title: "VetCare+ Web Application",
    period: "2025 - Present",
    description:
    "A web-based system designed for veterinary hospitals to manage doctors, pets, and appointments efficiently. It allows pet owners to register their pets, book consultations, and track medical history, while doctors can manage schedules, update treatment records, and access patient details. The system streamlines hospital operations, improves communication, and ensures better care for pets.",
    tech: ["ASP .Net", "React", "TypeScript", "MySQL"],
    link: "https://github.com/dinethminmu/smart-attendance-system",
    image: Vet,
    status: "In Progress",
  },
  {
    title: "Mandela E-commerce Website",
    period: "2024",
    description:
      "A user-friendly online platform built to help a startup business sell their products digitally. The website features product listings with images and details, a secure shopping cart, and a streamlined checkout process. Customers can browse categories, place orders, and make payments online, while the company can manage inventory, track sales, and handle customer interactions easily. This solution increases reach, boosts sales, and provides a modern shopping experience for customers.",
    tech: ["Java", "React", "MySQL"],
    link: "https://github.com/dinethminmu/My_Portfolio",
    image: mandela,
    status: "Completed",
  },
  {
    title: "FormLang++ DSL - Lex & Yacc, HTML Generator",
    period: "2025",
    description:
      "A custom tool that allows users to define domain-specific languages (DSLs) and automatically generate corresponding code or outputs, such as HTML forms. It streamlines development by letting users write simple, human-readable instructions that the app parses and converts into structured, executable results, reducing manual coding effort and improving productivity.",
    tech: ["EBNF", "Lex", "Yacc", "C", "HTML"],
    link: "https://github.com/dinethminmu/library-management-system",
    image: DSL,
    status: "Completed",
  }
];

function Projects() {
  return (
    <section id="projects" className="relative py-12 px-4 sm:px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className=" bg-white/10 border border-white/20 rounded-2xl shadow-xl p-5 sm:p-6 backdrop-blur-xl hover:scale-[1.025] transition-transform flex flex-col h-full"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover rounded-xl mb-4 border border-white/20 shadow"
            />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <span className="text-cyan-300 font-semibold text-sm">{project.period}</span>
            </div>
              {/* Project Status */}
            <span
              className={`inline-block mb-2 px-3 py-1 rounded-full text-xs font-semibold ${
                project.status === "Completed"
                  ? "bg-green-500/20 text-green-400 border border-green-400/40"
                  : "bg-yellow-500/20 text-yellow-400 border border-yellow-400/40"
              }`}
            >
              {project.status}
            </span>
            <p className="text-white/80 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-full text-xs bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white/90 bg-clip-text border border-cyan-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-cyan-300 hover:underline text-sm font-semibold"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
      {/* View All Projects Button */}
      <div className="flex justify-center mt-10">
        <a
          href="https://github.com/dinethminmu?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:from-pink-400 hover:to-yellow-400 transition-all duration-200"
        >
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;