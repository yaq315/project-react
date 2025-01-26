import React from "react";
import "./activity.css";
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
    <section id="activity" className="activity-section">
      <h1 className="activity-title">Activity</h1>
      <div className="cards1-container">
        {cards.map((card, index) => (
          <div key={index} className="card1">
            <img src={card.image} alt="error" className="card1-image" />
            <h3 className="card1-title">{card.titel}</h3>
            <p className="card1-description">{card.Description}</p>
            <p className="card1-date">{card.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activity;
