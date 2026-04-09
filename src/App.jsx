import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import MainNavBar from "./pages/MainNavBar";
import Login from "./pages/Login";

// Admin
import AdminDashboard from "./admin/AdminDashboard";
import ViewAllVisitors from "./admin/ViewAllVisitors";
import ViewAllArtworks from "./admin/ViewAllArtworks";
import ViewAllCurators from "./admin/ViewAllCurators";
import ViewAllArtist from "./admin/ViewAllArtist";

// Artist
import ArtistDashboard from "./artist/ArtistDashboard";
import UploadArtwork from "./artist/UploadArtwork";
import MyArtworks from "./artist/MyArtworks";
import EditArtwork from "./artist/EditArtwork";
import DeleteArtwork from "./artist/DeleteArtwork";
import ArtistProfile from "./artist/ArtistProfile";
// Curator
import CuratorDashboard from "./curator/CuratorDashboard";
import CreateExhibition from "./curator/CreateExhibition";
import ManageExhibitions from "./curator/ManageExhibitions";
import UpdateSchedule from "./curator/UpdateSchedule";

// Visitor
import VisitorDashboard from "./visitor/VisitorDashboard";
import BrowseArtworks from "./visitor/BrowseArtworks";
import WishlistPage from "./visitor/WishlistPage";
import CartPage from "./visitor/CartPage";

// Register
import VisitorRegister from "./visitor/VisitorRegister";
import ArtistRegister from "./artist/ArtistRegister";
import CuratorRegister from "./curator/CuratorRegister";

function Layout() {
  const location = useLocation();

  // ✅ Show Main Navbar only before login
  const showNavbar =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/visitor-register" ||
    location.pathname === "/artist-register" ||
    location.pathname === "/curator-register";

  return (
    <>
      {showNavbar && <MainNavBar />}

      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/view-visitors" element={<ViewAllVisitors />} />
        <Route path="/admin/view-artworks" element={<ViewAllArtworks />} />
        <Route path="/admin/view-curators" element={<ViewAllCurators />} />
        <Route path="/admin/view-artists" element={<ViewAllArtist />} />

        {/* Artist */}
        <Route path="/artist-dashboard" element={<ArtistDashboard />} />
        <Route path="/artist/upload" element={<UploadArtwork />} />
        <Route path="/artist/my-artworks" element={<MyArtworks />} />
        <Route path="/artist/profile" element={<ArtistProfile />} />
        <Route path="/artist/edit-artwork" element={<EditArtwork />} />
        <Route path="/artist/delete-artwork" element={<DeleteArtwork />} />

        {/* Curator */}
        <Route path="/curator-dashboard" element={<CuratorDashboard />} />
        <Route path="/curator/create-exhibition" element={<CreateExhibition />} />
        <Route path="/curator/manage-exhibitions" element={<ManageExhibitions />} />
        <Route path="/curator/update-schedule" element={<UpdateSchedule />} />

        {/* Visitor */}
        <Route path="/visitor-dashboard" element={<VisitorDashboard />} />
        <Route path="/visitor/browse" element={<BrowseArtworks />} />
        <Route path="/visitor/wishlist" element={<WishlistPage />} />
        <Route path="/visitor/cart" element={<CartPage />} />

        {/* Register */}
        <Route path="/visitor-register" element={<VisitorRegister />} />
        <Route path="/artist-register" element={<ArtistRegister />} />
        <Route path="/curator-register" element={<CuratorRegister />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;