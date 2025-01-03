import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <section className="about-me">
      <div className="container">
        <h1 className="intro-text">Hello, I'm John Doe</h1>
        <h2 className="subtitle">I'm a Software Developer</h2>
        <p className="scroll-message">Scroll below to learn more about me!</p>
      </div>
    </section>
  );
};

export default AboutMe;