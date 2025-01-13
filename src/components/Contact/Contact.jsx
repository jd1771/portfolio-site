import React from 'react';
import './Contact.css';
import mailSvg from '../../assets/mail.svg';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Let's get in touch!</h2>
      <div className="contact-container">
        <div className="contact-image">
          <img src={mailSvg} alt="Contact illustration" />
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Name"
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Your Email"
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                id="message" 
                name="message" 
                placeholder="Your Message"
                rows="5"
                required 
              ></textarea>
            </div>
            <button type="submit" className="contact-form-button">
              Send Message <FaPaperPlane className="contact-form-button-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
