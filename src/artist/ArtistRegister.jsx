import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../pages/Register.css";

function ArtistRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setError("");
    
    // Validation
    if (!form.name || !form.email || !form.password) {
      setError("Please fill in all required fields");
      return;
    }
    
    setLoading(true);
    try {
      const response = await API.post("/auth/register/artist", form);
      alert("Artist Registered Successfully ✅");
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
        <h2>Artist Registration</h2>

        {error && <div style={{color: "red", marginBottom: "10px", fontSize: "14px"}}>{error}</div>}

        <input
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <button className="auth-btn" onClick={handleRegister} disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </div>
    </div>
  );
}

export default ArtistRegister;