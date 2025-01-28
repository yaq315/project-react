// import React from "react";
// import { motion } from "framer-motion";
// import { FixedSizeList as List } from "react-window";
// import { FaSchool, FaUsers, FaGlobe } from "react-icons/fa";
// import MyImg from "../image/images3.jpeg";
// import "./about.css";  

// const AboutUs = () => {
//   const Row = ({ index, style }) => (
//     <div style={style} className="list-item">
//       Item {index + 1}
//     </div>
//   );

//   return (
//     <section id="about" className="about-section">
//       <motion.h2 
//         className="about-title"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         About Us
//       </motion.h2>

//       <motion.p 
//         className="about-paragraph"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         This is a description about our company. We are dedicated to providing excellent service and fostering a positive environment.
//       </motion.p>

//       <div className="about-icons">
//         <motion.div whileHover={{ scale: 1.1 }} className="icon-box">
//           <FaSchool className="icon" />
//           <p>Our Mission</p>
//         </motion.div>
//         <motion.div whileHover={{ scale: 1.1 }} className="icon-box">
//           <FaUsers className="icon" />
//           <p>Our Team</p>
//         </motion.div>
//         <motion.div whileHover={{ scale: 1.1 }} className="icon-box">
//           <FaGlobe className="icon" />
//           <p>Global Reach</p>
//         </motion.div>
//       </div>

//       <List
//         height={200}
//         itemCount={10}
//         itemSize={35}
//         width={300}
//       >
//         {Row}
//       </List>

//       <motion.img 
//         className="about-image" 
//         src={MyImg} 
//         alt="About Us"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       />
//     </section>
//   );
// };

// export default AboutUs;

