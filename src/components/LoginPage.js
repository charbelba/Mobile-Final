import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const userExists = accounts.some(
      (account) =>
        account.username === username && account.password === password
    );

    if (userExists) {
      alert("Login successful!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      alert("Login failed. Invalid username or password.");
    }
  };

  return (
    <>
      <Navbar /> {/* Render Navbar */}
      <div className="login-container">
        <div className="login-box">
          <h2>Please log in to continue</h2>
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
