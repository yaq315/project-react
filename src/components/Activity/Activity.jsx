import React from "react";
import imag1 from "../image/imag1s1.jpeg";
import imag2 from "../image/imag2s1.jpeg";
import imag3 from "../image/imag3s1.jpeg";

const Activity = () => {
  const cards = [
    {
      image: imag1,
      titel: "Educational trip",
      Description: "Visits to technology companies or technology exhibitions",
      date: "5/4/2025",
    },
    {
      image: imag2,
      titel: "Discussion Panels",
      Description: "A group of people participating in a discussion",
      date: "2/3/2025",
    },
    {
      image: imag3,
      titel: "Weekly Coding Challenges",
      Description: "Weekly coding challenges to improve students' skills.",
      date: "Every Monday",
    },
  ];

  return (
    <section id="about" style={styles.section}>
      <h1 style={styles.title}>Activity</h1>
      <div style={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div key={index} style={styles.card}>
            <img src={card.image} alt="error" style={styles.cardImage} />
            <h3 style={styles.cardTitle}>{card.titel}</h3>
            <p style={styles.cardDescription}>{card.Description}</p>
            <p style={styles.cardDate}>{card.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#FF6F00",
    marginBottom: "30px",
    textAlign: "center",
  },
  section: {
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 20px",
    backgroundColor: "#FFF3E0",
    color: "#5D4037",
    textAlign: "center",
    backgroundImage: "url('./images3.jpeg')",
    backgroundSize: "cover", 
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", 
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    maxWidth: "1200px", 
  },
  card: {
    backgroundColor: "#8D6E63",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "250px",
    margin: "10px",
    transition: "transform 0.3s ease-in-out",
  },
  cardImage: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    marginBottom: "15px",
  },
  cardTitle: {
    color: "#FF6F00", 
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "16px",
    color: "white", 
    marginBottom: "10px",
  },
  cardDate: {
    fontSize: "16px",
    color: "black", 
  },
};

export default Activity;

