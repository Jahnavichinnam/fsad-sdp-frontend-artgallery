import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./visitor.css";

export default function VisitorNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="visitor-navbar">
      <h2 className="visitor-title">Visitor Panel</h2>

      <div className="visitor-links">
        <Link to="/visitor-dashboard">Dashboard</Link>
        <Link to="/visitor/browse">Browse</Link>
        <Link to="/visitor/wishlist">Wishlist</Link>
        <Link to="/visitor/cart">Cart</Link>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}