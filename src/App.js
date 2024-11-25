import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SearchListings from "./components/SearchListings";
import PostListing from "./components/PostListing";
import AboutContact from "./components/AboutContact";
import './styles.css';
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchListings />} />
          <Route path="/post" element={<PostListing />} />
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/about" element={<AboutContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
