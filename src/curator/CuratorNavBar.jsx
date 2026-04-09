import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./curator.css";

export default function CuratorNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="curator-navbar">
      <h2 className="curator-title">Curator Panel</h2>

      <div className="curator-links">
        <Link to="/curator-dashboard">Dashboard</Link>
        <Link to="/curator/create-exhibition">Create Exhibition</Link>
        <Link to="/curator/manage-exhibitions">Manage Exhibitions</Link>
        <Link to="/curator/update-schedule">Update Schedule</Link>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}