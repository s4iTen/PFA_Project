import React from "react";
import "../Styles/Footer.css";
import Logo from "../assets/logo.png";

function App() {
  return (
    <div className="main">
      <div className="footer">
        <div className="bubbles">
          {Array.from({ length: 128 }).map((_, i) => (
            <div
              className="bubble"
              style={{
                "--size": `${2 + Math.random() * 4}rem`,
                "--distance": `${6 + Math.random() * 4}rem`,
                "--position": `${-5 + Math.random() * 110}%`,
                "--time": `${2 + Math.random() * 2}s`,
                "--delay": `${-1 * (2 + Math.random() * 2)}s`,
              }}
            />
          ))}
        </div>
        <div className="content">
          <p>Discover the latest Nike shoe collections and shop online.</p>
          <img src={Logo} alt="Logo" className="footer-logo" />
          <div className="footer-section">
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h2>Contact Us</h2>
            <p>123 Street, City Name</p>
            <p>Email: info@nikestore.com</p>
            <p>Phone: +1 234 56789</p>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Nike Store. All rights reserved.
          </p>
          </div>
      </div>
    </div>
  );
}

export default App;
