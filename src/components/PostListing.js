import React, { useState } from "react";
import "./PostListing.css";
import Navbar from "./Navbar";

const PostListing = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    type: "",
    image: null, // New field for image
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission, including the image, here
    console.log("Form Data Submitted:", formData);
    alert("Listing Submitted!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  return (

    <div className="home">
    {/* Include the Navbar */}
    <Navbar />
    <form onSubmit={handleSubmit}>
      <h2>Post a Listing</h2>
      <input
        name="title"
        placeholder="Title"
        onChange={handleInputChange}
        required
      />
      <input
        name="location"
        placeholder="Location"
        onChange={handleInputChange}
        required
      />
      <input
        name="price"
        placeholder="Price"
        type="number"
        onChange={handleInputChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleInputChange}
        required
      ></textarea>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default PostListing;
