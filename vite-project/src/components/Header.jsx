import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          Property<span>Hub</span>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/properties" className={({ isActive }) => isActive ? "active" : ""}>Properties</NavLink>
          <NavLink to="/favourites" className={({ isActive }) => isActive ? "active" : ""}>Favourites</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        </nav>

        {/* Call-to-action button */}
        <Link to="/list-property">
          <button className="cta-btn">List Property</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;