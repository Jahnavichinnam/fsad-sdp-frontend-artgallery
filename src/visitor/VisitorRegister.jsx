import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function VisitorRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      await API.post("/visitor/register", {
        ...formData,
        role: "VISITOR",
      });

      alert("Visitor Registered Successfully ✅");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration Failed ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Visitor Register</h2>

      <input name="name" placeholder="Name" onChange={handleChange} /><br /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br /><br />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br /><br />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default VisitorRegister;