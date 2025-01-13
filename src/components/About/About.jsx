import React, { useState, useEffect } from 'react';
import './About.css';

const AboutMe = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    "I'm a Software Developer",
    "I'm a UVIC Graduate",
    "I'm a Problem Solver",
  ];

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50; 
    const pauseTime = 2000; 

    const handleTyping = () => {
      const currentTitle = titles[currentIndex];
      
      if (!isDeleting) {
        // Typing
        if (displayText !== currentTitle) {
          const nextText = currentTitle.substring(0, displayText.length + 1);
          setDisplayText(nextText);
        } else {
          // Pause before starting to delete
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        } else {
          const nextText = currentTitle.substring(0, displayText.length - 1);
          setDisplayText(nextText);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting]);

  return (
    <section className="about" id="about">
      <div className="container">
        <h1 className="intro-text">Hello, I'm Jas</h1>
        <h2 className="subtitle">
          {displayText}
          <span className="cursor"></span>
        </h2>
        <p className="scroll-message">Scroll below to learn more about me!</p>
      </div>
    </section>
  );
};

export default AboutMe;