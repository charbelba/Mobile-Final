import React from "react";
import "./AboutContact.css"; // Assuming you have a separate CSS file for this page
import Navbar from "./Navbar"; // Import the Navbar component

const AboutContact = () => {
  return (
    <div className="about-contact-page">
      {/* Include the Navbar */}
      <Navbar />
      <div className="about-contact-container">
        <section className="about-section">
          <h2>About Us</h2>
          <p className="about-paragraph">
            At <strong>HomeFinder</strong>, our mission is to connect people with suitable rental properties,
            making the process of finding and listing properties seamless and stress-free. Whether you're a tenant
            looking for your dream home or a landlord searching for reliable tenants, we're here to help every step
            of the way.
          </p>
          <p>
            Our platform is designed with both tenants and landlords in mind. We offer a wide range of tools and resources
            to simplify the rental process. From detailed property listings to easy-to-use search filters, our goal is to
            make your rental experience as smooth and efficient as possible.
          </p>
          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              To provide a user-friendly platform that makes it easy for tenants and landlords to connect, ensuring a seamless
              and hassle-free rental experience for everyone involved.
            </p>
          </div>
        </section>

        <section className="contact-section">
          <h2>Contact Us</h2>
          <p className="contact-info">
            Have questions? We’d love to hear from you! Feel free to reach out to us through the form below or via our contact
            details:
          </p>
          <ul className="contact-details">
            <li><strong>Email:</strong> support@homefinder.com</li>
            <li><strong>Phone:</strong> +1 (123) 456-7890</li>
            <li><strong>Office:</strong> 123 Homefinder Blvd, Suite 400, Cityville, CA 90000</li>
          </ul>
          
          <form className="contact-form">
            <textarea placeholder="Your message" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AboutContact;
