
import React, { useState } from "react";
import "./sign.css";
import { useNavigate } from "react-router-dom";
import logo from "../image/logo.png";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer"

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();


  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        return /^[a-zA-Z]+$/.test(value) ? "" : "First name should only contain letters.";
      case "lastName":
        return /^[a-zA-Z]+$/.test(value) ? "" : "Last name should only contain letters.";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Please enter a valid email address.";
      case "password":
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value) ? "" : "Password must be at least 8 characters and contain both letters and numbers.";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate field
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      newErrors[field] = validateField(field, formData[field]);
    });

    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.values(newErrors).every((error) => error === "")) {
      console.log("Form submitted successfully!", formData);

      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify(formData));
      alert("Account created successfully!");

      navigate("/login");
    }
  };

  return (
    <div>

    <Navbar />
      <section className="showcase">
        <div className="overlay">
          <article className="left-section">
            <img src={logo} alt="Logo" className="logo" />
            <p className="description">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </article>
          <article className="right-section">
            <form className="form" onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <div className="input-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? "invalid" : "valid"}
                  required
                />
                {errors.firstName && <small className="error">{errors.firstName}</small>}
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? "invalid" : "valid"}
                  required
                />
                {errors.lastName && <small className="error">{errors.lastName}</small>}
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "invalid" : "valid"}
                  required
                />
                {errors.email && <small className="error">{errors.email}</small>}
              </div>

              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "invalid" : "valid"}
                  required
                />
                {errors.password && <small className="error">{errors.password}</small>}
              </div>

              <button type="submit">Sign Up</button>
              <p className="login-link">
                Already have an account? <a href="/login">Login</a>
              </p>
            </form>
          </article>
        </div>
      </section>
     <Footer />
    </div>
  );
}

export default Signup;