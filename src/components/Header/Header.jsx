import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'; 

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    setIsMenuOpen(false);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Jaskaran Dhaul</h1>
        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about"      onClick={() => scrollToSection("about")}>About</a></li>
            <li><a href="#experience" onClick={() => scrollToSection("experience")}>Experience</a></li>
            <li><a href="#projects"   onClick={() => scrollToSection("projects")}>Projects</a></li>
            <li><a href="#education"  onClick={() => scrollToSection("education")}>Education</a></li>
            <li><a href="#contact"    onClick={() => scrollToSection("contact")}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 