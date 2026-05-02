import React, { useEffect, useState } from "react";
import API from "../services/api";
import ArtistNavBar from "./ArtistNavBar";

export default function MyArtworks() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const artistId = localStorage.getItem("artistId");

  useEffect(() => {
    loadArtworks();
  }, []);

  const loadArtworks = async () => {
    if (!artistId) {
      setError("Artist not logged in");
      setLoading(false);
      return;
    }
    try {
      const res = await API.get(`/artist/myArtworks/${artistId}`);
      setArtworks(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setError("Failed to load artworks");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this artwork?")) return;
    try {
      await API.delete(`/artist/deleteArtwork/${id}`);
      alert("Artwork deleted ✅");
      loadArtworks();
    } catch (err) {
      alert("Failed to delete ❌");
    }
  };

  return (
    <div>
      <ArtistNavBar />
      <h2 style={{ textAlign: "center" }}>My Artworks</h2>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
      {!loading && artworks.length === 0 && <p style={{ textAlign: "center" }}>No artworks uploaded yet.</p>}

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
            <p><b>Quantity:</b> {a.quantity}</p>
            <p><b>Status:</b> <span style={{ color: a.status === "APPROVED" ? "green" : a.status === "REJECTED" ? "red" : "orange" }}>{a.status}</span></p>
            {a.description && <p><b>Description:</b> {a.description}</p>}
            <button onClick={() => handleDelete(a.id)} style={deleteBtnStyle}>Delete</button>
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
const deleteBtnStyle = {
  backgroundColor: "#d9534f", color: "white", border: "none",
  padding: "6px 14px", borderRadius: "4px", cursor: "pointer", marginTop: "10px"
};
