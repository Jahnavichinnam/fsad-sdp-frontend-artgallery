import React, { useState } from "react";
import { Link } from "react-router-dom";

function MainNavBar() {
  const [visitorOpen, setVisitorOpen] = useState(false);
  const [curatorOpen, setCuratorOpen] = useState(false);
  const [artistOpen, setArtistOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>ART GALLERY</h2>

      <div style={styles.menu}>

        {/* ADMIN */}
        <Link to="/login" style={styles.link}>Admin</Link>

        {/* VISITOR */}
        <div style={styles.dropdown}>
          <span onClick={() => setVisitorOpen(!visitorOpen)} style={styles.link}>
            Visitor ▼
          </span>
          {visitorOpen && (
            <div style={styles.dropdownMenu}>
              <Link to="/visitor-register">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>

        {/* CURATOR */}
        <div style={styles.dropdown}>
          <span onClick={() => setCuratorOpen(!curatorOpen)} style={styles.link}>
            Curator ▼
          </span>
          {curatorOpen && (
            <div style={styles.dropdownMenu}>
              <Link to="/curator-register">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>

        {/* ARTIST ✅ ONLY ADD THIS */}
        <div style={styles.dropdown}>
          <span onClick={() => setArtistOpen(!artistOpen)} style={styles.link}>
            Artist ▼
          </span>
          {artistOpen && (
            <div style={styles.dropdownMenu}>
              <Link to="/artist-register">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#0b3d3d",
    color: "white"
  },
  logo: {
    margin: 0
  },
  menu: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },
  link: {
    color: "white",
    cursor: "pointer",
    textDecoration: "none"
  },
  dropdown: {
    position: "relative"
  },
  dropdownMenu: {
    position: "absolute",
    top: "25px",
    background: "white",
    color: "black",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "5px"
  }
};

export default MainNavBar;