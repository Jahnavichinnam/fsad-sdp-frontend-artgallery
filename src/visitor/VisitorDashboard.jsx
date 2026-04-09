import React from "react";
import VisitorNavBar from "./VisitorNavBar";

function VisitorDashboard() {
  return (
    <div>
      {/* Visitor Panel */}
      <VisitorNavBar />

      {/* Page Content */}
      <div style={{ padding: "20px" }}>
        <h2>Visitor Dashboard</h2>
        <p>Browse and explore artworks here.</p>
      </div>
    </div>
  );
}

export default VisitorDashboard;