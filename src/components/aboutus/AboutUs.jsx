import React from "react";
import "./about.css";  
import MyImg from '../image/images3.jpeg';


const AboutUs = () => {
  
  
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Us</h2>

      <div className="about-paragraph">
        Future Coders is an innovative educational platform aimed at empowering individuals to acquire the digital and programming skills they need in the modern technological era. 
        Future Coders stands out with its interactive learning methodology, making it easy for both beginners and professionals to effectively develop their skills. Whether you're looking to start a career in technology or enhance your current skills,
        Future Coders provides you with the tools and knowledge necessary to achieve your goals.
      </div>



      <img className="about-image" src={MyImg} alt="About Us" />


    </section>
  );
};

export default AboutUs;


