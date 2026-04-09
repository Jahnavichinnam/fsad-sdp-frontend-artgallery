import React, { useState } from "react";
import API from "../services/api";
import ArtistNavBar from "./ArtistNavBar";

export default function UploadArtwork() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    description: "",
  });

  const artistId = localStorage.getItem("artistId");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpload = async () => {
    if (!artistId) {
      alert("Artist not logged in!");
      return;
    }

    try {
      await API.post("/artist/uploadArtwork", {
        ...formData,
        artistId: artistId
      });
      alert("Artwork uploaded successfully ✅");
      setFormData({ name: "", type: "", price: "", description: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to upload artwork ❌");
    }
  };

  return (
    <div>
      <ArtistNavBar />
      <h2 style={{ textAlign: "center" }}>Upload Artwork</h2>

      <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
        <input
          name="name"
          placeholder="Art Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="type"
          placeholder="Art Type"
          value={formData.type}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="price"
          type="number"
          placeholder="Art Price"
          value={formData.price}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="description"
          placeholder="Art Description"
          value={formData.description}
          onChange={handleChange}
          style={styles.textarea}
        />

        <button onClick={handleUpload} style={styles.button}>
          Upload Artwork
        </button>
      </div>
    </div>
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px"
  },
  textarea: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    minHeight: "100px"
  },
  button: {
    backgroundColor: "#1f4f4f",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};