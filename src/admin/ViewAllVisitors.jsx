import React, { useEffect, useState } from "react";
import API from "../services/api";
import AdminNavBar from "./AdminNavBar";

export default function ViewAllVisitors() {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadVisitors();
  }, []);

  const loadVisitors = async () => {
    try {
      setLoading(true);
      const res = await API.get("/admin/viewVisitors");
      console.log("API RESPONSE:", res.data); // for debugging

      if (Array.isArray(res.data)) {
        setVisitors(res.data);
      } else {
        setVisitors([]);
      }
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch visitors");
    } finally {
      setLoading(false);
    }
  };

  const deleteVisitor = async (id) => {
    const confirmDelete = window.confirm(
      "Do you want to delete this visitor?"
    );
    if (!confirmDelete) return;

    try {
      await API.delete(`/admin/deleteVisitor/${id}`);
      alert("Visitor deleted successfully ✅");
      loadVisitors(); // reload the list
    } catch (err) {
      console.error(err);
      alert("Failed to delete visitor ❌");
    }
  };

  return (
    <div>
      <AdminNavBar />

      <h2 style={{ textAlign: "center" }}>View All Visitors</h2>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
      {!loading && visitors.length === 0 && (
        <p style={{ textAlign: "center" }}>No visitors found.</p>
      )}

      {!loading && visitors.length > 0 && (
        <div style={{ padding: "20px" }}>
          {visitors.map((v) => (
            <div
              key={v.id}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
                borderRadius: "6px",
              }}
            >
              <p><b>ID:</b> {v.id}</p>
              <p><b>Name:</b> {v.name}</p>
              <p><b>Email:</b> {v.email}</p>
              <p><b>Contact:</b> {v.contact}</p>
              <p><b>City:</b> {v.city}</p>

              <button
                onClick={() => deleteVisitor(v.id)}
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