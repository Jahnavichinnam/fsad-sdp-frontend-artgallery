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

      <div className="artworks-page">
        <h2 className="page-title">My Artworks</h2>

        <div className="artwork-list">
          {artworks.map((a) => (
            <div key={a.id} className="artwork-card">
              <div className="artwork-main">
                <div>
                  <h4 className="artwork-title">{a.title}</h4>
                  <p className="artwork-category">{a.category}</p>
                </div>
                <div className="artwork-actions">
                  <button className="action-btn edit-btn">Edit</button>
                  <button className="action-btn delete-btn">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyArtworks;