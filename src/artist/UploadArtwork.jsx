import React, { useState } from "react";
import ArtistNavBar from "./ArtistNavBar";

function UploadArtwork() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleUpload = () => {
    alert("Artwork Uploaded!");
  };

  return (
    <div>
      <ArtistNavBar />
      <h2>Upload Artwork</h2>

      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} /><br /><br />
      <input placeholder="Category" onChange={(e) => setCategory(e.target.value)} /><br /><br />

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadArtwork;