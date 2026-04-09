import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Curator Registration</h2>

      <input name="name" placeholder="Name" onChange={handleChange} /><br /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br /><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br /><br />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default CuratorRegister;