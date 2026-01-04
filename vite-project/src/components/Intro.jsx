import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";

function Intro() {
  return (
    <section className="intro">
      <div className="intro-overlay">
        <div className="intro-content">
          <h1>
            Find Your <span>Perfect Property</span>
          </h1>
          <p>
            Discover apartments, houses, and commercial properties that match
            your lifestyle and budget.
          </p>
          <div className="intro-buttons">
            <Link to="/properties">
              <button className="primary-btn">Browse Properties</button>
            </Link>
            <Link to="/contact">
              <button className="secondary-btn">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;