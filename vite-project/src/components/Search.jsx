import React, { useState, useEffect } from "react";
import { DropdownList } from "react-widgets";
import "react-widgets/styles.css";
import propertiesData from "../assets/properties.json";
import "./Search.css";

function Search() {
  const [type, setType] = useState("Any");
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [minBeds, setMinBeds] = useState(null);
  const [maxBeds, setMaxBeds] = useState(null);
  const [dateAfter, setDateAfter] = useState("");
  const [postcode, setPostcode] = useState("");
  const [results, setResults] = useState([]);

  const prices = [0, 100000, 200000, 300000, 400000, 500000, 750000, 1000000];
  const bedrooms = [1, 2, 3, 4, 5];

  // Show all properties by default
  useEffect(() => {
    setResults(propertiesData.properties);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = propertiesData.properties.filter((property) => {
      if (type !== "Any" && property.type !== type) return false;
      if (minPrice !== null && property.price < minPrice) return false;
      if (maxPrice !== null && property.price > maxPrice) return false;
      if (minBeds !== null && property.bedrooms < minBeds) return false;
      if (maxBeds !== null && property.bedrooms > maxBeds) return false;
      if (postcode) {
        const firstPart = property.location.split(" ").pop();
        if (!firstPart.toUpperCase().startsWith(postcode.toUpperCase()))
          return false;
      }
      if (dateAfter) {
        const addedDate = new Date(
          `${property.added.month} ${property.added.day}, ${property.added.year}`
        );
        if (addedDate <= new Date(dateAfter)) return false;
      }
      return true;
    });
    setResults(filtered);

    const resultsSection = document.querySelector(".property-list");
    if (resultsSection) resultsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <h2>Search Properties</h2>

        <div className="form-group">
          <label>Property Type</label>
          <DropdownList
            className="compact-dropdown"
            data={[
              "Any",
              "House",
              "Apartment",
            ]}
            value={type}
            onChange={setType}
          />
        </div>

        <div className="form-group">
          <label>Min Price (£)</label>
          <DropdownList
            className="compact-dropdown"
            data={prices}
            value={minPrice}
            onChange={setMinPrice}
          />
        </div>

        <div className="form-group">
          <label>Max Price (£)</label>
          <DropdownList
            className="compact-dropdown"
            data={prices}
            value={maxPrice}
            onChange={setMaxPrice}
          />
        </div>

        <div className="form-group">
          <label>Min Bedrooms</label>
          <DropdownList
            className="compact-dropdown"
            data={bedrooms}
            value={minBeds}
            onChange={setMinBeds}
          />
        </div>

        <div className="form-group">
          <label>Max Bedrooms</label>
          <DropdownList
            className="compact-dropdown"
            data={bedrooms}
            value={maxBeds}
            onChange={setMaxBeds}
          />
        </div>

        <div className="form-group">
          <label>Date Added (After)</label>
          <input
            className="compact-input"
            type="date"
            value={dateAfter}
            onChange={(e) => setDateAfter(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Postcode Area</label>
          <input
            className="compact-input"
            type="text"
            placeholder="e.g. BR, BR5"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
        </div>

        <button type="submit">Search</button>
      </form>

      <div className="property-list">
        {results.length === 0 && <p className="no-results">No properties found.</p>}
        {results.map((property) => (
          <div className="property-card" key={property.id}>
            <div className="property-image">
              <img
                src={property.picture || "https://via.placeholder.com/400x250"}
                alt={`${property.type} in ${property.location}`}
              />
            </div>
            <div className="property-details">
              <h3>{property.type}</h3>
              <p className="location">{property.location}</p>
              <p>Bedrooms: {property.bedrooms}</p>
              <p className="price">£{property.price.toLocaleString()}</p>
              <p className="description">{property.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;