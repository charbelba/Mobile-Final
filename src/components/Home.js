import React from "react";
import "./Home.css";
import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Navbar />

      {/* Section 1 */}
      <section className="section section-1">
        <div className="content">
          <div className="title">Find Your Dream Home</div>
          <p className="description">
            Discover the best properties tailored to your needs and budget.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="image">
          <img src="/images1.jpg" alt="Dream Home" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="section section-2">
        <div className="content">
          <h2>Discover Your Next Property</h2>
          <p>Explore our wide range of listings and find the perfect match.</p>
          <button className="cta-button" onClick={() => navigate("/search")}>
            Search Listings
          </button>
        </div>
      </section>

      {/* Section 3 - Featured Properties */}
      <section className="section section-3">
        <h2 className="section-title">Our Featured Properties</h2>
        <div className="cards">
          <div className="card">
            <img src="/images1.jpg" alt="Property 1" />
            <h3>Modern Apartment</h3>
            <p>City Center - $800/month</p>
          </div>
          <div className="card">
            <img src="/images2.jpg" alt="Property 2" />
            <h3>Family House</h3>
            <p>Beirut - $1200/month</p>
          </div>
          <div className="card">
            <img src="/images3.jpg" alt="Property 3" />
            <h3>Studio Apartment</h3>
            <p>Downtown - $600/month</p>
          </div>
        </div>
      </section>

      {/* Section 4 - Trending Properties */}
      <section className="section section-4">
        <h2 className="section-title">Trending Properties</h2>
        <div className="cards">
          <div className="card">
            <img src="/images4.jpg" alt="Trending 1" />
            <h3>Luxury Condo</h3>
            <p>Uptown - $1500/month</p>
          </div>
          <div className="card">
            <img src="/images5.jpg" alt="Trending 2" />
            <h3>Beach House</h3>
            <p>Seaside - $3000/month</p>
          </div>
          <div className="card">
            <img src="/images6.jpg" alt="Trending 3" />
            <h3>Urban Loft</h3>
            <p>Downtown - $1200/month</p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="section section-5">
        <div className="content">
          <h2>Post Your Property</h2>
          <p>List your property and connect with potential tenants.</p>
          <button className="cta-button" onClick={() => navigate("/post")}>
            Post a Listing
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
