import React from "react";
import MyImg from '../image/images3.jpeg';

const AboutUs = () => {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.title}>About Us</h2>

      <p style={styles.paragraph}>
        Future Coders is an innovative educational platform aimed at empowering individuals to acquire the digital and programming skills they need in the modern technological era. 
        Future Coders stands out with its interactive learning methodology, making it easy for both beginners and professionals to effectively develop their skills. Whether you're looking to start a career in technology or enhance your current skills,
        Future Coders provides you with the tools and knowledge necessary to achieve your goals.
      </p>

      <img style={styles.image} src={MyImg} alt="About Us" />
    </section>
  );
};

const styles = {
  section: {
    padding: "50px 20px",
    backgroundColor: "#FFEDD5", 
    color: "#3E2723",  
    borderRadius: "20px", 
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",  
    Width: "1000px",  
    margin: "100px ",  
    textAlign: "center", 
  },

  title: {
    fontSize: "2",  
    fontWeight: "bold",
    color: "#D17F4A",  
    marginBottom: "20px",
    letterSpacing: "1px", 
  },

  paragraph: {
    fontSize: "18px",  
    color: "#5D4037",  
    lineHeight: "1.6",  
    textAlign: "justify",  
    marginBottom: "30px", 
  },

  image: {
    width: "500px",  
    height: "400px", 
    borderRadius: "15px", 
    marginTop: "30px",  
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  
  },
};

export default AboutUs;

