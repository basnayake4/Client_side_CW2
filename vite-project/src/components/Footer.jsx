import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>DreamProperties</h2>
          <p>Find your perfect home with us.</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <Link to="/">About Us</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Blog</Link>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <Link to="/">Contact</Link>
            <Link to="/">FAQs</Link>
            <Link to="/">Help Center</Link>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DreamProperties. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;