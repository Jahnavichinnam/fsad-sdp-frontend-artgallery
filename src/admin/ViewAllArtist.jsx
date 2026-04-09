import React, { useEffect, useState } from "react";
import API from "../services/api";
import AdminNavBar from "./AdminNavBar";

export default function ViewAllArtist() {
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArtists();
  }, []);

  const loadArtists = async () => {
    try {
      setLoading(true);
      const res = await API.get("/admin/viewArtists");
      console.log("API RESPONSE:", res.data);

      if (Array.isArray(res.data)) {
        setArtists(res.data);
      } else {
        setArtists([]);
      }
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch artists");
    } finally {
      setLoading(false);
    }
  };

  const deleteArtist = async (id) => {
    try {
      await API.delete(`/admin/deleteArtist/${id}`);
      loadArtists();
    } catch (err) {
      console.error(err);
      setError("Failed to delete artist");
    }
  };

  return (
    <div>
      <AdminNavBar />
      <h2 style={{ textAlign: "center" }}>View All Artists</h2>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
      {!loading && artists.length === 0 && (
        <p style={{ textAlign: "center" }}>No artists found.</p>
      )}

      {!loading && artists.length > 0 && (
        <div style={{ padding: "20px" }}>
          {artists.map((a) => (
            <div
              key={a.id}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
                borderRadius: "6px",
              }}
            >
              <p><b>ID:</b> {a.id}</p>
              <p><b>Name:</b> {a.name}</p>
              <p><b>Email:</b> {a.email}</p>
              <p><b>Role:</b> {a.role}</p>
              <button
                onClick={() => deleteArtist(a.id)}
                style={{
                  backgroundColor: "#d9534f",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}