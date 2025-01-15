import React, { useState } from 'react';
import './Contact.css';
import mailSvg from '../../assets/mail.svg';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const FORM_ENDPOINT = import.meta.env.VITE_APP_FORM_ENDPOINT;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    
    const formData = new FormData(e.target);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        e.target.reset();  // Reset form
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Let's get in touch!</h2>
      <div className="contact-container">
        <div className="contact-image">
          <img src={mailSvg} alt="Contact illustration" />
        </div>
        <div className="contact-form-container">
          <form 
            className="contact-form" 
            onSubmit={handleSubmit}
          >
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
            {status === 'success' && (
              <p className="contact-form-status success">
                Thanks for your message! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-form-status error">
                Oops! There was a problem sending your message. Please try again.
              </p>
            )}
            <button 
              type="submit" 
              className="contact-form-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} 
              <FaPaperPlane className="contact-form-button-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
