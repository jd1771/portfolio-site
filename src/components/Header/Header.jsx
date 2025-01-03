import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Jaskaran Dhaul</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 