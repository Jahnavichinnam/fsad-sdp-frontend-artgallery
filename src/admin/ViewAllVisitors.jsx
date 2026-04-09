import React, { useEffect, useState } from "react";
import API from "../services/api";
import AdminNavBar from "./AdminNavBar";

function ViewAllVisitors() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    loadVisitors();
  }, []);

  const loadVisitors = async () => {
    try {
      const res = await API.get("/admin/viewVisitors");
      setVisitors(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <AdminNavBar />
      <h2>Visitors</h2>

      {visitors.map((v) => (
        <div key={v.id}>
          {v.name} - {v.email}
        </div>
      ))}
    </div>
  );
}

export default ViewAllVisitors;