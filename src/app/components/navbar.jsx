'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 mix-blend">
      <div className="flex items-center justify-between p-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-orange-400 select-none">JS</h1>

        {/* Navigation Links */}
        <nav className={`flex md:flex ${isMobileMenuOpen ? 'flex-col mt-4' : 'hidden md:flex'}`}>
          <a href="#about" className="relative font-bold text-lg cursor-pointer group mb-2 md:mb-0 md:mr-10">
            About
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#education" className="relative font-bold text-lg cursor-pointer group mb-2 md:mb-0 md:mr-10">
            Education
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#projects" className="relative font-bold text-lg cursor-pointer group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        
      </div>
    </header>
  );
}