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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    console.log("Artist Registered:", form);

    alert("Artist Registered Successfully ✅");

    // 👉 directly go to login
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Artist Registration</h2>

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

        <button className="auth-btn" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default ArtistRegister;