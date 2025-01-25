import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [inputFocus, setInputFocus] = useState(null);
  const [buttonHover, setButtonHover] = useState(false);
  const [theme, setTheme] = useState('orange'); // 'orange', 'blue', or 'green'

  // Theme color configurations
  const themes = {
    orange: {
      primary: '#ff6b35',
      secondary: '#004e89',
      accent: '#00a896'
    },
    blue: {
      primary: '#1a73e8',
      secondary: '#0d47a1',
      accent: '#4caf50'
    },
    green: {
      primary: '#2e7d32',
      secondary: '#005005',
      accent: '#ff6b35'
    }
  };

  return (
    <section className="contact-section" id="contact"
      style={{ '--primary': themes[theme].primary,
               '--secondary': themes[theme].secondary,
               '--accent': themes[theme].accent }}>
      
      <div className="theme-switcher">
        <button onClick={() => setTheme('orange')} style={{background: '#ff6b35'}}>🍊</button>
        <button onClick={() => setTheme('blue')} style={{background: '#1a73e8'}}>🔵</button>
        <button onClick={() => setTheme('green')} style={{background: '#2e7d32'}}>🌿</button>
      </div>

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
                borderColor: inputFocus === 'name' ? 'var(--accent)' : 'var(--primary)'
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
                borderColor: inputFocus === 'email' ? 'var(--accent)' : 'var(--primary)'
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              onFocus={() => setInputFocus('message')}
              onBlur={() => setInputFocus(null)}
              style={{
                borderColor: inputFocus === 'message' ? 'var(--accent)' : 'var(--primary)'
              }}
            ></textarea>
          </div>

          <button 
            type="submit"
            className="submit-btn"
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
            style={{
              background: buttonHover ? 'var(--secondary)' : 'var(--primary)',
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
