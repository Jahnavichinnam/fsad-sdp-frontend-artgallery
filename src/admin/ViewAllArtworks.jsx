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
      const res = await API.get("/admin/artists");
      setArtists(res.data);
    } catch (err) {
      console.error("Error fetching artists:", err);
    }
  };

  const deleteArtist = async (id) => {
    try {
      await API.delete(`/admin/deleteArtist/${id}`);
      loadArtists();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div>
      <AdminNavBar />
      <h2>Artists</h2>

      {artists.length === 0 ? (
        <p>No artists found</p>
      ) : (
        artists.map((a) => (
          <div key={a.id}>
            {a.name} - {a.email}
            <button onClick={() => deleteArtist(a.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ViewAllArtist;