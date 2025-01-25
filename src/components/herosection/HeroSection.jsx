import React from "react";
import './Hero.css'; 

const HeroSection = () => {
  return (
    <section id="hero" style={styles.section}>
         <div className="hero-container" >
      <div className="hero-content">
        <h1 className="hero-title">Future Coders</h1>
        <p className="hero-subtitle">Learn coding the fun and easy way!</p>
        <p className="hero-description">
          An interactive platform for kids to develop their creativity and coding skills through games, exciting projects, and kid-friendly lessons.
        </p>
        <button className="hero-button">START</button>
      </div>
    </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    textAlign: "center",
    backgroundColor: "#FFCC80",
    color: "#5D4037",
  },
};

export default HeroSection;

