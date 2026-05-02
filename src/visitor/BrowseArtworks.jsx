import React, { useEffect, useState } from "react";
import API from "../services/api";
import VisitorNavBar from "./VisitorNavBar";

export default function BrowseArtworks() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/visitor/browseArtworks")
      .then((res) => setArtworks(Array.isArray(res.data) ? res.data : []))
      .catch((err) => { console.error(err); setError("Failed to load artworks"); })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <VisitorNavBar />
      <h2 style={{ textAlign: "center" }}>Browse Artworks 🎨</h2>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
      {!loading && artworks.length === 0 && <p style={{ textAlign: "center" }}>No artworks available.</p>}

      <div style={{ padding: "20px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
        {artworks.map((a) => (
          <div key={a.id} style={cardStyle}>
            {a.imageUrl && (
              <img src={`https://artgallery-backend-production-f554.up.railway.app${a.imageUrl}`} alt={a.title}
                style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "6px", marginBottom: "10px" }} />
            )}
            <h3>{a.title}</h3>
            <p><b>Category:</b> {a.category}</p>
            <p><b>Price:</b> ₹{a.price}</p>
            <p><b>Artist:</b> {a.artist?.name || "Unknown"}</p>
            <p><b>Status:</b> <span style={{ color: a.status === "APPROVED" ? "green" : a.status === "REJECTED" ? "red" : "orange" }}>{a.status}</span></p>
            {a.description && <p style={{ fontSize: "13px", color: "#555" }}>{a.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc", borderRadius: "8px", padding: "16px",
  width: "280px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
};
