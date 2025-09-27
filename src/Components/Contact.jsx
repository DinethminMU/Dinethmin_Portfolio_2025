import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="relative py-16 px-4 max-w-5xl mx-auto w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Contact Me
      </h2>
      <div className="bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 backdrop-blur-xl flex flex-col items-center gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full">
        
            <a
            href="tel:+94703391092"
            className="text-white/90 font-medium hover:text-green-300 transition flex flex-col items-center"
            >
                <div className="relative flex flex-col items-center w-full break-words bg-white/10 border border-white/20 rounded-xl shadow-lg p-5 transition hover:scale-105
    before:content-[''] before:absolute before:inset-0 before:rounded-xl before:-z-10 before:opacity-0 hover:before:opacity-50
    before:bg-gradient-to-r before:from-cyan-400 before:via-blue-500 before:to-purple-500 before:blur-lg before:transition-all">
            <span className="text-green-400 text-2xl mb-1"><FaPhone className="text-green-400 text-2xl mb-1" /></span>
            +94 70 339 1092
            <span className="text-xs text-white/50 mt-1">Phone</span>
            </div>
            </a>
        
        
            <a
            href="mailto:dinethminmu@gmail.com"
            className="text-white/90 font-medium hover:text-cyan-300 transition flex flex-col items-center"
            >
                <div className="relative flex flex-col items-center w-full break-words bg-white/10 border border-white/20 rounded-xl shadow-lg p-5 transition hover:scale-105
    before:content-[''] before:absolute before:inset-0 before:rounded-xl before:-z-10 before:opacity-0 hover:before:opacity-50
    before:bg-gradient-to-r before:from-cyan-400 before:via-blue-500 before:to-purple-500 before:blur-lg before:transition-all">
            <span className="text-cyan-400 text-2xl mb-1"><FaEnvelope className="text-cyan-400 text-2xl mb-1" /></span>
            dinethminmu@gmail.com
            <span className="text-xs text-white/50 mt-1">Email</span>
            </div>
            </a>
        
        
            <a
            href="https://www.linkedin.com/in/dinethmin25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 font-medium hover:text-blue-300 transition flex flex-col items-center"
            >
                <div className="relative flex flex-col items-center w-full break-words bg-white/10 border border-white/20 rounded-xl shadow-lg p-5 transition hover:scale-105
    before:content-[''] before:absolute before:inset-0 before:rounded-xl before:-z-10 before:opacity-0 hover:before:opacity-50
    before:bg-gradient-to-r before:from-cyan-400 before:via-blue-500 before:to-purple-500 before:blur-lg before:transition-all">
            <span className="text-blue-400 text-2xl mb-1"><FaLinkedin className="text-blue-400 text-2xl mb-1" /></span>
            linkedin/dinethmin25
            <span className="text-xs text-white/50 mt-1">LinkedIn</span>
            </div>
            </a>
        
        
            <a
            href="https://github.com/dinethminmu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 font-medium hover:text-purple-300 transition flex flex-col items-center"
            >
            <div className="relative flex flex-col items-center w-full break-words bg-white/10 border border-white/20 rounded-xl shadow-lg p-5 transition hover:scale-105
    before:content-[''] before:absolute before:inset-0 before:rounded-xl before:-z-10 before:opacity-0 hover:before:opacity-50
    before:bg-gradient-to-r before:from-cyan-400 before:via-blue-500 before:to-purple-500 before:blur-lg before:transition-all"> 
            <span className="text-purple-400 text-2xl mb-1"><FaGithub className="text-purple-400 text-2xl mb-1" /></span>
            github.com/dinethminmu
            <span className="text-xs text-white/50 mt-1">GitHub</span>
            </div>   
            </a>
        
        </div>
        <div className="mt-8 w-full">
          <form
            action="mailto:dinethminmu@gmail.com"
            method="POST"
            encType="text/plain"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="px-4 py-2 rounded-lg bg-white/20 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-lg bg-white/20 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="px-4 py-2 rounded-lg bg-white/20 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <button
              type="submit"
              className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:from-pink-400 hover:to-yellow-400 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;