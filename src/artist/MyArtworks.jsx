import React from "react";
import ArtistNavBar from "./ArtistNavBar";

function MyArtworks() {
  const artworks = [
    { id: 1, title: "Mona Lisa", category: "Portrait" },
    { id: 2, title: "Sunset", category: "Nature" }
  ];

  return (
    <div>
      <ArtistNavBar />
      <h2>My Artworks</h2>

      {artworks.map((a) => (
        <div key={a.id}>
          <h4>{a.title}</h4>
          <p>{a.category}</p>
        </div>
      ))}
    </div>
  );
}

export default MyArtworks;