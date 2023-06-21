import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import Logo from "../assets/logo.png";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
              key={i}
            />
          ))}
        </div>
        <div className="content">
          <h2 className="title">Discover the latest Nike shoe collections and shop online.</h2>
          <img src={Logo} alt="Logo" className="footer-logo" />
          <div className="footer-section">
            <ul className="footer-links">
              <li>
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="footer-contact">
              <h2>Contact Us</h2>
              <h4>123 Street, Tunis</h4>
              <h4>Email: info@nikestore.com</h4>
              <h4>Phone: +216 56 890 250</h4>
            </div>
          </div>
          <p className="copy">
            &copy; {new Date().getFullYear()} Nike Store. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
