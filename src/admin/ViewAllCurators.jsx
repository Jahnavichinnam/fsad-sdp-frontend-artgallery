import React, { useEffect, useState } from "react";
import API from "../services/api";
import AdminNavBar from "./AdminNavBar";

export default function ViewAllCurators() {
  const [curators, setCurators] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCurators();
  }, []);

  const loadCurators = async () => {
    try {
      setLoading(true);

      const res = await API.get("/admin/viewallcurators");

      console.log("API RESPONSE:", res.data); // DEBUG

      if (Array.isArray(res.data)) {
        setCurators(res.data);
      } else {
        setCurators([]);
      }

      setError("");
    } catch (err) {
      console.error(err);
      const status = err.response?.status;
      const message =
        err.response?.data?.message ||
        err.response?.data ||
        err.message ||
        "Failed to fetch curators";

      if (status === 403) {
        setError("Access denied: only admin users can view curators.");
      } else {
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AdminNavBar />

      <h2 style={{ textAlign: "center" }}>View All Curators</h2>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      {!loading && curators.length === 0 && (
        <p style={{ textAlign: "center" }}>No curators found.</p>
      )}

      {!loading && curators.length > 0 && (
        <div style={{ padding: "20px" }}>
          {curators.map((c) => (
            <div
              key={c.id}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
                borderRadius: "6px",
              }}
            >
              <p><b>ID:</b> {c.id}</p>
              <p><b>Name:</b> {c.name}</p>
              <p><b>Email:</b> {c.email}</p>
              <p><b>Role:</b> {c.role}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}