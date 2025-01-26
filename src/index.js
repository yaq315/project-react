import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./components/pages/home";
import Signup from "./components/pages/signup";
import Login from "./components/pages/login"


  const Index = () => {
return(
  <Router>
  <Routes>
    <Route path="/" element={<Homepage />} /> 
    <Route path="/signup" element={<Signup />} /> 
    <Route path="/login" element={<Login />} /> 
  </Routes>
</Router>
)

  }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);




