import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // CSS for Navbar

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="./logo.png" alt="HomeFinder Logo" className="logo" />
        <Link to="/" className="brand-name" onClick={scrollToTop}>
          HomeFinder
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search Listings</Link>
        </li>
        <li>
          <Link to="/about">About Us & Contact</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/post" className="post-btn">
            Post a Listing
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
