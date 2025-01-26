import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h1 className="services-title">Services</h1>
      <div className="cards-container">
        <div className="service-card">
          <h3 className="card-title">Specialized Courses</h3>
          <ul className="card-list">
            <li>Programming in languages like Python, JavaScript, Java, and C++.</li>
            <li>Mobile app development (Android and iOS).</li>
            <li>Artificial Intelligence and Machine Learning.</li>
            <li>Data analysis and Data Science.</li>
          </ul>
        </div>

        <div className="service-card">
          <h3 className="card-title">Hands-on Projects</h3>
          <ul className="card-list">
            <li>Small projects to apply what you’ve learned.</li>
            <li>Coding challenges to enhance skills.</li>
            <li>Competitions and events to foster creativity.</li>
          </ul>
        </div>

        <div className="service-card">
          <h3 className="card-title">Interactive Platforms</h3>
          <ul className="card-list">
            <li>Online IDE for writing and executing code.</li>
            <li>Interactive quizzes to measure progress.</li>
            <li>Discussion forums to connect with learners and experts.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
