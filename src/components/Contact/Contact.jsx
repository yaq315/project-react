import React, { useState } from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import Image2 from '../image/imagelocation.jpeg';
export default function Contact() {
  const [inputFocus, setInputFocus] = useState(null);
  const [buttonHover, setButtonHover] = useState(false);
  const { t } = useTranslation();


  const cards = [
    {
      
      titel: t("phone"),
      Description: t("+123 456 7890"),
    },
    {
      
      titel: t("Location"),
      Description: t("Aqaba-Jordan"),
    },
    {
     
      titel: t("Email"),
      Description: "codersfuture@gmail.com",
    },
  ];

  return (
<div>
    <section id="information" className="information-section"> 
    <h2 className="information-title">{t("information")}</h2>
    <div className="cards2-container">
      {cards.map((card, index) => (
        <div key={index} className="card1">
          <h3 className="card1-title">{card.titel}</h3>
          <p className="card1-description">{card.Description}</p>
        </div>
      ))}
    </div>
  </section>

    <section className="contact-section" id="contact">
      <h2 className="section-title">{t("Contact Us")}</h2>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{t("Name")}</label>
            <input 
              type="text"
              id="name"
              onFocus={() => setInputFocus('name')}
              onBlur={() => setInputFocus(null)}
              style={{
                borderColor: inputFocus === 'name' ? 'rgb(129, 45, 45)' : '#7A4B4B'
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t("Email")}</label>
            <input 
              type="email"
              id="email"
              onFocus={() => setInputFocus('email')}
              onBlur={() => setInputFocus(null)}
              style={{
                borderColor: inputFocus === 'email' ? 'rgb(129, 45, 45)' : '#7A4B4B'
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t("Message")}</label>
            <textarea
              id="message"
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
           {t("Send Message")} 
          </button>
        </form>
      </div>
      <section className="location-contact">
          <div className="location">
            <h1>{t("Our Location")}</h1>
            <a href="https://www.google.com/maps/place/Orange+Digital+Village+Aqaba/@29.535652,35.0123723,17z/data=!3m1!4b1!4m6!3m5!1s0x150071875a9fca41:0xf5d61d999f967371!8m2!3d29.535652!4d35.0123723!16s%2Fg%2F11t2b3tv6d?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D">
              <img style={{width:"200px",borderRadius:"50px",gap:"30px"}} src={Image2} alt="Map" />
            </a>
          </div>
        </section>
    </section>
    </div>
  );
}
