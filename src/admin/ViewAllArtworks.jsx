import React, { useEffect, useState } from "react";
import API from "../services/api";
import AdminNavBar from "./AdminNavBar";

function ViewAllArtworks() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    loadArtworks();
  }, []);

  const loadArtworks = async () => {
    try {
      const res = await API.get("/admin/artworks");
      setArtworks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <AdminNavBar />
      <h2>Artworks</h2>

      {artworks.map((a) => (
        <div key={a.id}>
          <h4>{a.title}</h4>
          <p>{a.category}</p>
        </div>
      ))}
    </div>
  );
}

export default ViewAllArtworks;