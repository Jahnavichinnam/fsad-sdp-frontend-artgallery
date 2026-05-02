import React, { useEffect, useState } from "react";
import API from "../services/api";
import AdminNavBar from "./AdminNavBar";

export default function ViewAllArtworks() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadArtworks();
  }, []);

  const loadArtworks = async () => {
    try {
      setLoading(true);
      const res = await API.get("/admin/viewArtworks");
      setArtworks(Array.isArray(res.data) ? res.data : []);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch artworks");
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    try {
      await API.put(`/admin/approveArtwork/${id}`);
      alert("Artwork Approved ✅");
      loadArtworks();
    } catch (err) {
      alert("Failed to approve ❌");
    }
  };

  const handleReject = async (id) => {
    try {
      await API.put(`/admin/rejectArtwork/${id}`);
      alert("Artwork Rejected ❌");
      loadArtworks();
    } catch (err) {
      alert("Failed to reject ❌");
    }
  };

  const statusColor = (status) => {
    if (status === "APPROVED") return "green";
    if (status === "REJECTED") return "red";
    return "orange";
  };

  return (
    <div>
      <AdminNavBar />
      <h2 style={{ textAlign: "center" }}>All Artworks</h2>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
      {!loading && artworks.length === 0 && (
        <p style={{ textAlign: "center" }}>No artworks found.</p>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", padding: "20px", justifyContent: "center" }}>
        {artworks.map((a) => (
          <div key={a.id} style={cardStyle}>
            {a.imageUrl && (
              <img
                src={`https://artgallery-backend-production-f554.up.railway.app${a.imageUrl}`}
                alt={a.title}
                style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "6px", marginBottom: "10px" }}
              />
            )}
            <h3 style={{ margin: "0 0 8px" }}>{a.title}</h3>
            <p><b>Category:</b> {a.category}</p>
            <p><b>Price:</b> ₹{a.price}</p>
            <p><b>Artist:</b> {a.artist?.name || "Unknown"}</p>
            <p><b>Status:</b> <span style={{ color: statusColor(a.status), fontWeight: "bold" }}>{a.status}</span></p>
            {a.description && <p style={{ fontSize: "13px", color: "#555" }}>{a.description}</p>}

            <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
              <button
                onClick={() => handleApprove(a.id)}
                disabled={a.status === "APPROVED"}
                style={{ ...btnStyle, backgroundColor: a.status === "APPROVED" ? "#aaa" : "#28a745" }}
              >
                Approve
              </button>
              <button
                onClick={() => handleReject(a.id)}
                disabled={a.status === "REJECTED"}
                style={{ ...btnStyle, backgroundColor: a.status === "REJECTED" ? "#aaa" : "#d9534f" }}
              >
                Reject
              </button>
            </div>
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

const btnStyle = {
  color: "white", border: "none", padding: "6px 14px",
  borderRadius: "4px", cursor: "pointer", flex: 1
};
