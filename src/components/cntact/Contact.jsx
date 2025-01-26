import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [inputFocus, setInputFocus] = useState(null);
  const [buttonHover, setButtonHover] = useState(false);

  return (
    <section className="contact-section" id="contact">
      
      <h2 className="section-title">Contact Us</h2>
      
      <div className="contact-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text"
              onFocus={() => setInputFocus('name')}
              onBlur={() => setInputFocus(null)}
              style={{
                borderColor: inputFocus === 'name' ? 'rgb(129, 45, 45)' : '#7A4B4B'
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              onFocus={() => setInputFocus('email')}
              onBlur={() => setInputFocus(null)}
              style={{
                borderColor: inputFocus === 'email' ? 'rgb(129, 45, 45)' : '#7A4B4B'
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              onFocus={() => setInputFocus('message')}
              onBlur={() => setInputFocus(null)}
              style={{
                borderColor: inputFocus === 'message' ? 'rgb(129, 45, 45)' : '#7A4B4B'
              }}
            ></textarea>
          </div>

          <button 
            type="submit"
            className="submit-btn"
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
            style={{
              background: buttonHover ? 'rgb(129, 45, 45)' : '#7A4B4B',
              transform: buttonHover ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

