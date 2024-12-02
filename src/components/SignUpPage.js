import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import "./SignUpPage.css";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    if (accounts.some((account) => account.username === username)) {
      alert("Username already exists. Please choose a different one.");
      return;
    }

    accounts.push({ username, password, email });
    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("Account created successfully!");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <>
      <Navbar /> {/* Render Navbar */}
      <div className="signup-container">
        <div className="signup-box">
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
          <p className="login-link">
            Already have an account? <a href="/login">Log in here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
