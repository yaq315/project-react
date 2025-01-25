import React from "react";

const Services = () => {
  return (
    <section id="about" style={styles.section}>
      <h1 style={styles.title}>Services</h1>
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Specialized Courses</h3>
          <ul style={styles.list}>
            <li>Programming in languages like Python, JavaScript, Java, and C++.</li>
            <li>Mobile app development (Android and iOS).</li>
            <li>Artificial Intelligence and Machine Learning.</li>
            <li>Data analysis and Data Science.</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Hands-on Projects</h3>
          <ul style={styles.list}>
            <li>Small projects to apply what you’ve learned.</li>
            <li>Coding challenges to enhance skills.</li>
            <li>Competitions and events to foster creativity.</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Interactive Platforms</h3>
          <ul style={styles.list}>
            <li>Online IDE for writing and executing code.</li>
            <li>Interactive quizzes to measure progress.</li>
            <li>Discussion forums to connect with learners and experts.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "50px 20px",
    backgroundColor: "#FFF3E0",
    color: "#5D4037",
    textAlign: "center",
  },
  
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#FF6F00", 
    marginBottom: "30px",
  },

  cardsContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
  },

  card: {
    backgroundColor: "#FFCC80", 
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "280px",
    transition: "transform 0.3s ease",
  },

  cardTitle: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#D17F4A",  
    marginBottom: "15px",
  },

  list: {
    listStyleType: "none",
    paddingLeft: "0",
    color: "#5D4037",
    fontSize: "1rem",
  
  },

  listItem: {
    marginBottom: "10px",
  },
};

export default Services;




