import React from "react";
import { motion } from "framer-motion";
import MyImg from "../image/images3.jpeg";
import { useTranslation } from "react-i18next";
import Navbar from "../navbar/Navbar";
import "./About.css";
 import Footer from "../footer/Footer"

const AboutUs = () => {

  
  const [t,i18n] =useTranslation();
  return (
    <div>
    <Navbar />
    <section id="about" className="about-section">

      <div className="about-sect">
      
      <motion.h2 
        className="about-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       {t('about-title')} 
      </motion.h2>
     
      </div>

  
      <motion.div 
        className="about-paragraph-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }} 
      >
        <p className="about-paragraph">
     
        </p>
        
        {t('about-p2')}
      </motion.div>


      <motion.img 
        className="about-image" 
        src={MyImg} 
        alt="About Us"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }} 
      />
      
      
    </section>
    <Footer />
    </div>
  );
};

export default AboutUs;
