import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../pages/Register.css";

function CuratorRegister() {
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
    console.log("Curator Registered:", form);
    alert("Curator Registered Successfully ✅");

    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Curator Registration</h2>

        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />

        <button className="auth-btn" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default CuratorRegister;