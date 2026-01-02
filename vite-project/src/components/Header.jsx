import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          Property<span>Hub</span>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#properties">Properties</a>
          <a href="#favourites">Favourites</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="cta-btn">List Property</button>
      </div>
    </header>
  );
}

export default Header;