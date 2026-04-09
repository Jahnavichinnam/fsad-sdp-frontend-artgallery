import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./artist.css"; // 👈 use css like admin

export default function ArtistNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="artist-navbar">
      <h2 className="artist-title">Artist Panel</h2>

      <div className="artist-links">
        <Link to="/artist-dashboard">Dashboard</Link>
        <Link to="/artist/profile">My Profile</Link>
        <Link to="/artist/upload">Upload Artwork</Link>
        <Link to="/artist/my-artworks">My Artworks</Link>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}