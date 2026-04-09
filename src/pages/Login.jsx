import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "ADMIN", // default
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    const { email, password, role } = formData;

    // 🔴 Basic validation
    if (!email || !password) {
      alert("Please enter all fields");
      return;
    }

    // ✅ ROLE BASED NAVIGATION
    if (role === "ADMIN") {
      navigate("/admin");
    } 
    else if (role === "ARTIST") {
      navigate("/artist-dashboard");
    } 
    else if (role === "CURATOR") {
      navigate("/curator-dashboard");
    } 
    else if (role === "VISITOR") {
      navigate("/visitor-dashboard");
    } 
    else {
      alert("Invalid role selected");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>

      <input
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="password"
        type="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
      />
      <br /><br />

      {/* ✅ IMPORTANT FIX */}
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
      >
        <option value="ADMIN">ADMIN</option>
        <option value="ARTIST">ARTIST</option>
        <option value="CURATOR">CURATOR</option>
        <option value="VISITOR">VISITOR</option>
      </select>

      <br /><br />

      <button onClick={handleLogin}>Login</button>

      <br /><br />

      {/* Register Buttons */}
      <button onClick={() => navigate("/visitor-register")}>
        Visitor Register
      </button>
      <br />
      <button onClick={() => navigate("/artist-register")}>
        Artist Register
      </button>
      <br />
      <button onClick={() => navigate("/curator-register")}>
        Curator Register
      </button>
    </div>
  );
}

export default Login;