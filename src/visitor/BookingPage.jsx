import React,
{useEffect,useState}
from "react";

import API from "../services/api";
import Navbar from "../pages/MainNavBar";

function BookingPage(){

const [bookings,setBookings]=useState([]);

useEffect(()=>{

loadBookings();

},[]);

const loadBookings=async()=>{

const res =
await API.get(
"/booking/view/1"
);

setBookings(res.data);

};

return(

<div>

<Navbar/>

<h2>My Bookings</h2>

{bookings.map(b=>(

<div key={b.id}>

<p>
Artwork ID: {b.artwork.id}
</p>

<p>
Quantity: {b.quantity}
</p>

</div>

))}

</div>

);

}

export default BookingPage;