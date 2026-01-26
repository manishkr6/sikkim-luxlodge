import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// ✅ CLERK IMPORTS
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import Login from "./pages/Login";
import MyBookings from "./pages/MyBookings";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";

// ✅ ADD THIS IMPORT (THIS WAS THE ISSUE)
import TravelPage from "./pages/TravelPage";

const RouteWrapper = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<AllRooms />} />
      <Route path="/rooms/:id" element={<RoomDetails />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/travel/:districtId" element={<TravelPage />} />

      {/* ✅ PROTECTED ROUTE */}
      <Route
        path="/my-bookings"
        element={
          <>
            <SignedIn>
              <MyBookings />
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="min-h-[70vh]">
        <AnimatePresence mode="wait">
          <RouteWrapper />
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default App;
