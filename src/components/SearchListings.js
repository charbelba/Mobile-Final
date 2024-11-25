import React, { useState } from "react";
import "./SearchListings.css";
import Navbar from "./Navbar"; // Import the Navbar component

const SearchListings = () => {
  const [filters, setFilters] = useState({ location: "", price: "", bedrooms: "", type: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const properties = [
    { id: 1, image: "/images4.jpg", price: 800, location: "Beirut", bedrooms: 2 },
    { id: 2, image: "/images5.jpg", price: 900, location: "Naccache", bedrooms: 3 },
    { id: 3, image: "/images6.jpg", price: 1200, location: "Jbeil", bedrooms: 4 },
    { id: 4, image: "/images7.jpg", price: 600, location: "Akkar", bedrooms: 2 },
    { id: 5, image: "/images8.jpg", price: 800, location: "Batroun", bedrooms: 3 },
    { id: 6, image: "/images9.jpg", price: 500, location: "Gemayze", bedrooms: 1 },
    { id: 7, image: "/images10.jpg", price: 600, location: "Gemayze", bedrooms: 1 },
    { id: 8, image: "/images11.jpg", price: 700, location: "Dekweneh", bedrooms: 2 },
    { id: 9, image: "/images12.jpg", price: 800, location: "Dekweneh", bedrooms: 2 },
  ]; // Example data

  const filteredProperties = properties.filter((property) => {
    return (
      (!filters.location || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.price || property.price <= filters.price) &&
      (!filters.bedrooms || property.bedrooms === parseInt(filters.bedrooms))
    );
  });

  return (
    <div className="search-listings">
      {/* Include the Navbar */}
      <Navbar />

      <h2>Search Listings:</h2>
      <div className="filters">
        <input
          name="location"
          placeholder="Location"
          onChange={handleInputChange}
        />
        <input
          name="price"
          placeholder="Max Price"
          type="number"
          onChange={handleInputChange}
        />
        <input
          name="bedrooms"
          placeholder="Bedrooms"
          type="number"
          onChange={handleInputChange}
        />
      </div>
      <div className="properties">
        {filteredProperties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.location} />
            <h3>${property.price}</h3>
            <p>Location: {property.location}</p>
            <p>Bedrooms: {property.bedrooms}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchListings;
