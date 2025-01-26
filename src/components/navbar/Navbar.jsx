import React from "react";
import { Link } from "react-router-dom"; 
import "./navbar.css";
import logo from "../image/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
    
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

     
      <div className="navbar-links-wrapper">
        <ul className="navbar-links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#activity">Activity</a>
          </li>
          <li>
            <a href="#Teams">Teams</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      
      <div className="navbar-buttons">
      <Link to="/login">
        <button className="button login-btn">Login</button>
        </Link>

        <Link to="/signup">
        <button className="button signup-btn">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


