import React, { useEffect, useState } from "react";
import API from "../services/api";
import AdminNavBar from "./AdminNavBar";

function ViewAllArtist() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    loadArtists();
  }, []);

  const loadArtists = async () => {
    try {
      const res = await API.get("/admin/viewArtists");
      setArtists(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteArtist = async (id) => {
    await API.delete(`/admin/deleteArtist/${id}`);
    loadArtists();
  };

  return (
    <div>
      <AdminNavBar />
      <h2>Artists</h2>

      {artists.map((a) => (
        <div key={a.id}>
          {a.name} - {a.email}
          <button onClick={() => deleteArtist(a.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ViewAllArtist;