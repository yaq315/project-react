import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/herosection/HeroSection";
import AboutUs from "./components/aboutus/AboutUs";
import Services from "./components/services/Services";
import Activity from "./components/Activity/Activity";
import Teams from "./components/team/Teams";
import Contact from "./components/cntact/Contact";

import "./index.css";

const Index = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <HeroSection />
        <AboutUs />
        <Services />
        <Activity />
        <Teams />
        <Contact />
      </main>
      <Footer />
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);




