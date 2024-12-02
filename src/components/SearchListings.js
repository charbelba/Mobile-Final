import React, { useState } from "react";
import "./SearchListings.css";
import Navbar from "./Navbar";

const SearchListings = ({ listings }) => {
  const [filters, setFilters] = useState({
    location: "",
    price: "",
    bedrooms: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredListings = listings.filter((listing) => {
    return (
      (!filters.location ||
        listing.location
          .toLowerCase()
          .includes(filters.location.toLowerCase())) &&
      (!filters.price || listing.price <= filters.price) &&
      (!filters.bedrooms ||
        parseInt(listing.bedrooms) === parseInt(filters.bedrooms))
    );
  });

  return (
    <div className="container">
      <Navbar />

      <div className="content-search">
        <h2 className="search-title">Search for a Listing</h2>
        <div className="filters">
          <input
            name="location"
            placeholder="Location"
            onChange={handleInputChange}
          />
          <select
            name="price"
            value={filters.price}
            onChange={handleInputChange}
          >
            <option value="">Max Price</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="1500">1500</option>
            <option value="2000">2000</option>
          </select>
          <select
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleInputChange}
          >
            <option value="">Bedrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <div className="properties-container">
        {filteredListings.map((listing) => (
          <div key={listing.id} className="property-card">
            <img src={listing.image} alt={listing.title} />
            <h3>${listing.price}</h3>
            <p>Location: {listing.location}</p>
            <p>Bedrooms: {listing.bedrooms}</p>
            <p>{listing.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchListings;
