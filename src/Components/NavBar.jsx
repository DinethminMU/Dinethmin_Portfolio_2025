import React, { useState } from "react";
import { Link } from "react-scroll";


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Education", to: "education" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Honors", to: "honors" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-4 left-2 right-2 md:left-8 md:right-8 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl md:rounded-3xl">
          {/* Logo */}
          <a href="/" className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            DM
          </a>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
        {navLinks.map((item) => (
            <li key={item.name}>
            <Link
                to={item.to}
                smooth={true}
                duration={700}
                spy={true}
                offset={-80}
                className="font-medium bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
            >
                {item.name}
            </Link>
            </li>
        ))}
        </ul>
          {/* Hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="icon-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#22d3ee" />
                  <stop offset="0.5" stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#a21caf" />
                </linearGradient>
              </defs>
              {isOpen ? (
                <path
                  stroke="url(#icon-gradient)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  stroke="url(#icon-gradient)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <ul
          className={`md:hidden px-6 pt-2 pb-4 mt-2 bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl transition-all duration-400 ease-out space-y-2
            ${isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden pointer-events-none"}`}
        >
          {navLinks.map((item) => (
            <li key={item.name}>
                <Link
                to={item.to}
                smooth={true}
                duration={700}
                spy={true}
                offset={-80}
                className="block font-medium text-lg py-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:from-pink-400 hover:to-yellow-400 transition-all hover:translate-x-2 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;