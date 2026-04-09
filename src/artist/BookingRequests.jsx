import React from "react";
import ArtistNavBar from "./ArtistNavBar";

function BookingRequests() {
  const bookings = [
    { id: 1, visitor: "John", artwork: "Sunset" }
  ];

  return (
    <div>
      <ArtistNavBar />
      <h2>Booking Requests</h2>

      {bookings.map((b) => (
        <div key={b.id}>
          <p>{b.visitor} requested {b.artwork}</p>
        </div>
      ))}
    </div>
  );
}

export default BookingRequests;