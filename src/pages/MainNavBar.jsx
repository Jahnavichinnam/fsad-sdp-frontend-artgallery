import React from "react";
import { Link } from "react-router-dom";
import "./MainNavBar.css";

function MainNavBar() {
  return (
    <nav className="main-navbar">
      <Link to="/" className="navbar-brand">Art Gallery</Link>
      <div className="navbar-links">
        <Link to="/login" className="navbar-link">Login</Link>
        <Link to="/visitor-register" className="navbar-link">Visitor Register</Link>
        <Link to="/artist-register" className="navbar-link">Artist Register</Link>
        <Link to="/curator-register" className="navbar-link">Curator Register</Link>
      </div>
    </nav>
  );
}

export default MainNavBar;