import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SearchListings from "./components/SearchListings";
import PostListing from "./components/PostListing";
import AboutContact from "./components/AboutContact";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import "./styles.css";

function App() {
  const predefinedListings = [
    {
      id: 1,
      title: "Cozy Apartment in Beirut",
      description: "A beautiful apartment located in the heart of the city.",
      location: "Beirut",
      price: 800,
      bedrooms: 2,
      image: "/images4.jpg",
    },
    {
      id: 2,
      title: "Luxury Villa in Naccache",
      description: "Spacious villa with stunning views.",
      location: "Naccache",
      price: 1200,
      bedrooms: 4,
      image: "/images5.jpg",
    },
    {
      id: 3,
      title: "Modern Flat in Gemayze",
      description: "Stylish flat near the best restaurants and nightlife.",
      location: "Gemayze",
      price: 700,
      bedrooms: 2,
      image: "/images6.jpg",
    },
  ];

  const [listings, setListings] = useState(predefinedListings);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search"
            element={<SearchListings listings={listings} />}
          />
          <Route
            path="/post"
            element={
              <PostListing listings={listings} setListings={setListings} />
            }
          />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/about" element={<AboutContact />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
