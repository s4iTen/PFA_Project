import React from 'react'
import "../Styles/gallery.css"
import Logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <img src={Logo} alt="Logo" className="footer-logo" />
        <p>Discover the latest Nike shoe collections and shop online.</p>
      </div>
      <div className="footer-section">
        <h2>Quick Links</h2>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Contact Us</h2>
        <p>123 Street, City Name</p>
        <p>Email: info@nikestore.com</p>
        <p>Phone: +1 234 56789</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Nike Store. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer