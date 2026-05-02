import React, { useState } from "react";
import API from "../services/api";
import ArtistNavBar from "./ArtistNavBar";

export default function UploadArtwork() {
  const [formData, setFormData] = useState({
    title: "", category: "", price: "", quantity: "1", description: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const artistId = localStorage.getItem("artistId");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!artistId) { alert("Artist not logged in!"); return; }
    if (!formData.title || !formData.category || !formData.price) {
      alert("Please fill in Title, Category and Price");
      return;
    }

    const data = new FormData();
    data.append("artistId", artistId);
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("price", formData.price);
    data.append("quantity", formData.quantity);
    data.append("description", formData.description);
    if (image) data.append("image", image);

    setLoading(true);
    try {
      await API.post("/artist/uploadArtwork", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Artwork uploaded successfully ✅");
      setFormData({ title: "", category: "", price: "", quantity: "1", description: "" });
      setImage(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert("Failed to upload artwork ❌: " + (err.response?.data || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ArtistNavBar />
      <h2 style={{ textAlign: "center" }}>Upload Artwork</h2>

      <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
        <input name="title" placeholder="Artwork Title *" value={formData.title} onChange={handleChange} style={styles.input} />
        <input name="category" placeholder="Category (e.g. Portrait, Nature) *" value={formData.category} onChange={handleChange} style={styles.input} />
        <input name="price" type="number" placeholder="Price *" value={formData.price} onChange={handleChange} style={styles.input} />
        <input name="quantity" type="number" placeholder="Quantity" value={formData.quantity} onChange={handleChange} style={styles.input} />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} style={styles.textarea} />

        <label style={styles.fileLabel}>
          Choose Image
          <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
        </label>
        {preview && (
          <img src={preview} alt="preview" style={{ width: "100%", marginTop: "10px", borderRadius: "6px", maxHeight: "200px", objectFit: "cover" }} />
        )}

        <button onClick={handleUpload} style={styles.button} disabled={loading}>
          {loading ? "Uploading..." : "Upload Artwork"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  input: { width: "100%", padding: "10px", margin: "10px 0", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px", boxSizing: "border-box" },
  textarea: { width: "100%", padding: "10px", margin: "10px 0", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px", minHeight: "100px", boxSizing: "border-box" },
  fileLabel: { display: "block", padding: "10px", margin: "10px 0", backgroundColor: "#eee", borderRadius: "6px", cursor: "pointer", textAlign: "center", border: "1px dashed #aaa" },
  button: { backgroundColor: "#1f4f4f", color: "white", border: "none", padding: "12px 20px", fontSize: "16px", borderRadius: "6px", cursor: "pointer", width: "100%", marginTop: "10px" },
};
