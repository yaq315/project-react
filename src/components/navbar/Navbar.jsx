import React from "react";
import logo from "../image/logonav.png"

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <img
          src={logo}
          alt="Logo"
          style={{ height: "150px", width:"200px" }}
        />
      </div>
      <ul style={styles.navLinks}>
        <li><a href="#hero" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About Us</a></li>
        <li><a href="#services" style={styles.link}>Services</a></li>
        <li><a href="#activity" style={styles.link}>Activity</a></li>
        <li><a href="#teams" style={styles.link}>Teams</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
      <div style={styles.buttons}>
        <button style={styles.button}>Login</button>
        <button style={{ ...styles.button, backgroundColor: "rgb(129, 45, 45)" }}>
          Sign Up
        </button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {

    height:"70px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "orange",
    color: "#FFF",
    position: "sticky",
    top: 0,
    

  },
  logo: {
    display: "flex",
    alignItems: "center",
  
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "15px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
  },


  buttons: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "rgb(129, 45, 45)",
    border: "none",
    borderRadius: "4px",
    color: "#FFF3E0",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Navbar;
