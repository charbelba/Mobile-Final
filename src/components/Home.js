import React from "react";
import "./Home.css"; // Assuming you have a separate CSS file for this component
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component

const Home = () => {
  return (
    <div className="home">
      {/* Include the Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-overlay">
          <p>Explore a wide range of properties tailored to your needs.</p>
          <Link to="/search" className="hero-btn">
            Start Exploring
          </Link>
        </div>
      </div>

      {/* Featured Properties Section */}
      <div className="featured-section">
        <h2>Our Featured Properties</h2>
        <div className="featured-cards">
          <div className="card">
            <img src="/images1.jpg" alt="Modern Apartment" />
            <h3>Modern Apartment</h3>
            <p>City Center - $800/month</p>
          </div>
          <div className="card">
            <img src="/images2.jpg" alt="Family House" />
            <h3>Family House</h3>
            <p>Beirut - $1200/month</p>
          </div>
          <div className="card">
            <img src="/images3.jpg" alt="Studio Apartment" />
            <h3>Studio Apartment</h3>
            <p>Downtown - $600/month</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>Are You a Landlord?</h2>
        <p>Post your property to connect with potential tenants now.</p>
        <Link to="/post" className="cta-btn">
          Post a Listing
        </Link>
      </div>
    </div>
  );
};

export default Home;
