import React, { useEffect, useState } from "react";
import API from "../services/api";
import ArtistNavBar from "./ArtistNavBar";

export default function ArtistProfile() {
  const [artworks, setArtworks] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [artistId, setArtistId] = useState(null);

  useEffect(() => {
    // Assuming artistId is stored in localStorage after login
    const id = localStorage.getItem("artistId");
    setArtistId(id);
    if (id) {
      loadArtworks(id);
      loadBookings(id);
    }
  }, []);

  const loadArtworks = async (id) => {
    try {
      const res = await API.get(`/artist/viewMyArtworks/${id}`);
      setArtworks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const loadBookings = async (id) => {
    try {
      const res = await API.get(`/artist/viewBookings/${id}`);
      setBookings(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const totalOrders = bookings.length;
  const pendingOrders = bookings.filter(b => b.status === "PENDING").length;
  const completedOrders = bookings.filter(b => b.status === "COMPLETED").length;

  return (
    <div>
      <ArtistNavBar />

      <h2 style={{ textAlign: "center" }}>My Profile</h2>

      <div style={{ padding: "20px" }}>
        <h3>Orders Summary</h3>
        <p><b>Total Orders:</b> {totalOrders}</p>
        <p><b>Pending Orders:</b> {pendingOrders}</p>
        <p><b>Completed Orders:</b> {completedOrders}</p>

        <h3>My Artworks</h3>
        {loading && <p>Loading artworks...</p>}
        {!loading && artworks.length === 0 && <p>No artworks found.</p>}
        {!loading && artworks.map(art => (
          <div key={art.id} style={{
            border: "1px solid #ccc",
            borderRadius: "6px",
            padding: "10px",
            margin: "10px 0"
          }}>
            <p><b>Art Name:</b> {art.name}</p>
            <p><b>Type:</b> {art.type}</p>
            <p><b>Price:</b> ${art.price}</p>
            <p><b>Description:</b> {art.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}