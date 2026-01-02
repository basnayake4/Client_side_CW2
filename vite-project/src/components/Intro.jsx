import React from "react";
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
            <button className="primary-btn">Browse Properties</button>
            <button className="secondary-btn">Contact Agent</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;