import React from "react";
import VisitorNavBar from "./VisitorNavBar";

function WishlistPage() {
  return (
    <div>
      <VisitorNavBar />

      <div style={{ padding: "20px" }}>
        <h2>Wishlist ❤️</h2>
        <p>Your saved artworks will appear here.</p>
      </div>
    </div>
  );
}

export default WishlistPage;