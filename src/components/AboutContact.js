import React from "react";
import "./AboutContact.css"; // Assuming you have a separate CSS file for this page
import Navbar from "./Navbar"; // Import the Navbar component


const AboutContact = () => {
  return (
    <div className="home">
    {/* Include the Navbar */}
    <Navbar />
    <div className="about-contact">
      <div className="content">
        <h2>About & Contact</h2>
        <p className="about-paragraph">
          At <strong>HomeFinder</strong>, our mission is to connect people with suitable rental properties, making the process of finding and listing properties seamless and stress-free. Whether you're a tenant looking for your dream home or a landlord searching for reliable tenants, we're here to help every step of the way.
        </p>
        <p>
          Feel free to contact us for more information or share your feedback below.
        </p>
      </div>
      <form className="contact-form">
        <textarea placeholder="Your message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
    </div>

  );
};

export default AboutContact;
