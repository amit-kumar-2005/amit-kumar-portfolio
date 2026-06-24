import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-lg text-white z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="flex items-center justify-between py-4">

          <a
            href="#home"
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Amit Kumar
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>

            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
            >
              Resume
            </a>

          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pb-4">

            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 px-4 py-2 rounded-lg"
            >
              Resume
            </a>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;