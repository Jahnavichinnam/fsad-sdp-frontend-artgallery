import React, { useEffect, useState } from "react";
import API from "../services/api";
import AdminNavBar from "./AdminNavBar";

function ViewAllCurators() {
  const [curators, setCurators] = useState([]);

  useEffect(() => {
    loadCurators();
  }, []);

  const loadCurators = async () => {
    try {
      const res = await API.get("/admin/viewCurators");
      setCurators(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <AdminNavBar />
      <h2>Curators</h2>

      {curators.map((c) => (
        <div key={c.id}>
          {c.name} - {c.email}
        </div>
      ))}
    </div>
  );
}

export default ViewAllCurators;