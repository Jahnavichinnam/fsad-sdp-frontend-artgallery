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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    setError("");
    
    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all required fields");
      return;
    }
    
    setLoading(true);
    try {
      const response = await API.post("/auth/register/visitor", formData);
      alert("Visitor Registered Successfully ✅");
      navigate("/login");
    } catch (err) {
      console.error("Registration error:", err);
      const errorMsg = err.response?.data || err.message;
      if (errorMsg.includes("Email already registered")) {
        setError("This email is already registered. Please use a different email.");
      } else {
        setError("Registration failed: " + errorMsg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Visitor Registration</h2>

        {error && <div style={{color: "red", marginBottom: "10px", fontSize: "14px"}}>{error}</div>}

        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input name="contact" placeholder="Contact Number" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />

        <button className="auth-btn" onClick={handleRegister} disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </div>
    </div>
  );
}

export default VisitorRegister;