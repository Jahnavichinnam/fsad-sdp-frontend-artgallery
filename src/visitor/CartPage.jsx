import React from "react";
import VisitorNavBar from "./VisitorNavBar";

function CartPage() {
  return (
    <div>
      <VisitorNavBar />

      <div style={{ padding: "20px" }}>
        <h2>Cart 🛒</h2>
        <p>Your cart items will appear here.</p>
      </div>
    </div>
  );
}

export default CartPage;