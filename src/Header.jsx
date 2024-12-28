import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <h1>Jaskaran Dhaul</h1>
      <nav>
        <ul>
          <li><a href="#home">About</a></li>
          <li><a href="#about">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 