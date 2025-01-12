import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="social-links">
          <a 
            href="https://github.com/jd1771" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub className="social-icon" />
          </a>
          <a 
            href="https://www.linkedin.com/in/jas-dhaul-90b0181aa/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a 
            href="mailto:jasdhaul0@gmail.com"
            aria-label="Email Contact"
          >
            <MdEmail className="social-icon" />
          </a>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;