import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api"; 

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "ADMIN",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 UPDATED LOGIN FUNCTION
  const handleLogin = async () => {
    const { email, password, role } = formData;

    if (!email || !password) {
      alert("Please enter all fields");
      return;
    }

    try {
      
      const res = await API.post("/auth/login", {
        login: email,     // backend expects "login"
        password: password
      });

      // ✅ STORE TOKEN
      localStorage.setItem("token", res.data.token);

      // ✅ OPTIONAL: store user
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");

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

    } catch (err) {
      console.error(err);
      alert("Invalid credentials ❌");
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