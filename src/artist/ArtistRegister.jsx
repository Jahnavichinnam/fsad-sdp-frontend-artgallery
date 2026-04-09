import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Artist Registration</h2>

      <input
        name="name"
        placeholder="Enter Name"
        onChange={handleChange}
      /><br /><br />

      <input
        name="email"
        placeholder="Enter Email"
        onChange={handleChange}
      /><br /><br />

      <input
        name="password"
        type="password"
        placeholder="Enter Password"
        onChange={handleChange}
      /><br /><br />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default ArtistRegister;