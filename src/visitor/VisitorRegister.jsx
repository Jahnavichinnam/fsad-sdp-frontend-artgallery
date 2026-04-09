import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../pages/Register.css";

function VisitorRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "", 
    city: "",    
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = () => {
    console.log("Visitor Registered:", form);

    alert("Visitor Registered Successfully ✅");

    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Visitor Registration</h2>

        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input name="contact" placeholder="Contact Number" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />

        <button className="auth-btn" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default VisitorRegister;