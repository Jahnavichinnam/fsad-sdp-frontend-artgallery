import React from "react";
import AdminNavBar from "./AdminNavBar";

function AdminDashboard() {
  return (
    <div>
      <AdminNavBar />   {/* ✅ THIS IS REQUIRED */}

      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        Admin Dashboard
      </h2>
    </div>
  );
}

export default AdminDashboard;