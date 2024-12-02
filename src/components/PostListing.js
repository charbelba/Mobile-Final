import React, { useState } from "react";
import "./PostListing.css";
import Navbar from "./Navbar";

const PostListing = ({ listings, setListings }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    bedrooms: "",
    image: null,
    imagePreview: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = {
      id: Date.now(),
      ...formData,
      image: formData.imagePreview, // Use preview for display
    };

    setListings([...listings, newListing]);
    alert("Listing Submitted!");
    setFormData({
      title: "",
      description: "",
      location: "",
      price: "",
      bedrooms: "",
      image: null,
      imagePreview: null,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };

  return (
    <div className="post-listing-page">
      <Navbar />
      <form onSubmit={handleSubmit} className="post-listing-form">
        <h2 className = "title-posting">Create a New Listing</h2>

        <div className="form-content">
          {/* Image preview section */}
          <div className="image-section">
            {formData.imagePreview && (
              <img
                src={formData.imagePreview}
                alt="Preview"
                className="image-preview"
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>

          {/* Title and Description Section */}
          <div className="details-section">
            <input
              name="title"
              placeholder="Property Title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="description"
              placeholder="Property Description"
              value={formData.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
        </div>

        {/* Location and Bedrooms section */}
        <div className="location-bedrooms-section">
          <select
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Location</option>
            <option value="Beirut">Beirut</option>
            <option value="Naccache">Naccache</option>
            <option value="Jbeil">Jbeil</option>
            <option value="Akkar">Akkar</option>
            <option value="Batroun">Batroun</option>
          </select>

          <select
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleInputChange}
            required
          >
            <option value="">Number of Bedrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        {/* Price Section */}
        <input
          name="price"
          placeholder="Enter Price (in $)"
          type="number"
          value={formData.price}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit Listing</button>
      </form>
    </div>
  );
};

export default PostListing;
