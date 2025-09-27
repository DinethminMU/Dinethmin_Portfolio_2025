import React from "react";

const projects = [
  {
    title: "Smart Attendance System",
    period: "2023",
    description:
      "A face recognition-based attendance system using Python, OpenCV, and a web dashboard for real-time monitoring. Improved accuracy and reduced manual errors for university classrooms.",
    tech: ["Python", "OpenCV", "Flask", "React"],
    link: "https://github.com/dinethminmu/smart-attendance-system",
  },
  {
    title: "Personal Portfolio Website",
    period: "2024",
    description:
      "A modern, responsive portfolio website to showcase my skills, projects, and achievements. Features animated UI, dark mode, and downloadable CV.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    link: "https://github.com/dinethminmu/My_Portfolio",
  },
  {
    title: "Library Management System",
    period: "2022",
    description:
      "A full-stack application for managing library resources, book lending, and user accounts. Includes admin dashboard and reporting features.",
    tech: ["Java", "Spring Boot", "MySQL"],
    link: "https://github.com/dinethminmu/library-management-system",
  },
  {
    title: "Mobile Expense Tracker",
    period: "2023",
    description:
      "A cross-platform mobile app to track daily expenses, visualize spending, and set budgets. Designed for simplicity and ease of use.",
    tech: ["Flutter", "Firebase"],
    link: "https://github.com/dinethminmu/mobile-expense-tracker",
  },
];

function Projects() {
  return (
    <section className="relative py-12 px-2 sm:px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/10 border border-white/20 rounded-2xl shadow-xl p-5 sm:p-6 backdrop-blur-xl hover:scale-[1.025] transition-transform flex flex-col h-full"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <span className="text-cyan-300 font-semibold text-sm">{project.period}</span>
            </div>
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
    </section>
  );
}

export default Projects;