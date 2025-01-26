import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 Future Coders. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "rgb(129, 45, 45)", // استخدام اللون المطلوب
    color: "#FFF",
  },
};

export default Footer;


