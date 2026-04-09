import React from "react";
import ArtistNavBar from "./ArtistNavBar";

function ArtistProfile() {
  return (
    <div>
      <ArtistNavBar />
      <h2>Artist Profile</h2>
      <p>Name: Demo Artist</p>
      <p>Email: artist@gmail.com</p>
    </div>
  );
}

export default ArtistProfile;