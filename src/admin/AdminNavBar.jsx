import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./admin.css";

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
<<<<<<< HEAD
    localStorage.clear();
=======
    
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    // 👉 redirect to login
>>>>>>> 25659c17c7cee8c4c4de9fae7be13619fb0b2a12
    navigate("/login");
  };

  return (
    <div className="admin-navbar">
      <h2 className="admin-title">Admin Panel</h2>

      <div className="admin-links">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/view-visitors">Visitors</Link>
        <Link to="/admin/view-artists">Artists</Link>
        <Link to="/admin/view-curators">Curators</Link>
        <Link to="/admin/view-artworks">Artworks</Link>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
}