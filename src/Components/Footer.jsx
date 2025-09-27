import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <footer className="w-full py-6 mt-auto bg-white/10 backdrop-blur-xl border-t border-white/20 ">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <span className="text-white/70 text-sm">
          &copy; {new Date().getFullYear()} Dinethmin Manditha. All rights reserved.
        </span>
        <div className="flex gap-4">
          <a
            href="https://github.com/dinethminmu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white transition"
          >
            <FaGithub className="text-purple-400 text-2xl mb-1" />
          </a>
          <a
            href="https://www.linkedin.com/in/dinethmin25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white transition"
          >
            <FaLinkedin className="text-blue-400 text-2xl mb-1" />
          </a>
          <a
            href="mailto:dinethminmu@gmail.com"
            className="text-cyan-300 hover:text-white transition"
          >
            <FaEnvelope className="text-cyan-400 text-2xl mb-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;