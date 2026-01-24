import React, { useState } from "react";
import { DropdownList, NumberPicker, DatePicker } from "react-widgets";
import "react-widgets/styles.css";
import propertiesData from "../assets/properties.json";
import { Link } from "react-router-dom";
import "./Search.css";

function Search() {
  const [type, setType] = useState("Any");
  const [postcode, setPostcode] = useState("");
  const [minPrice, setMinPrice] = useState(null);
  const [bedrooms, setBedrooms] = useState(null);
  const [dateAdded, setDateAdded] = useState(null);
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true);

    const filteredResults = propertiesData.properties.filter((property) => {
      if (type !== "Any" && property.type !== type) return false;
      if (postcode && !property.postcode.toLowerCase().includes(postcode.toLowerCase()))
        return false;
      if (minPrice && property.price < minPrice) return false;
      if (bedrooms && property.bedrooms !== bedrooms) return false;
      if (dateAdded && new Date(property.dateAdded).toDateString() !== new Date(dateAdded).toDateString())
        return false;

      return true;
    });

    setResults(filteredResults);
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch} data-testid="search-form">
        <div className="search-grid">
          <div className="search-field">
            <label>Property Type</label>
            <DropdownList
              data={["Any", "House", "Apartment"]}
              value={type}
              onChange={setType}
            />
          </div>

          <div className="search-field">
            <label>Postcode Area</label>
            <DropdownList
              data={["Any", "BR", "SE", "SW", "London"]}
              value={postcode || "Any"}
              onChange={(value) => setPostcode(value === "Any" ? "" : value)}
            />
          </div>

          <div className="search-field">
            <label>Minimum Price (£)</label>
            <NumberPicker value={minPrice} onChange={setMinPrice} />
          </div>

          <div className="search-field">
            <label>Bedrooms</label>
            <NumberPicker min={1} value={bedrooms} onChange={setBedrooms} />
          </div>

          <div className="search-field">
            <label>Date Added</label>
            <DatePicker value={dateAdded} onChange={setDateAdded} />
          </div>

          <div className="search-field">
            <button type="submit" >Search</button>
          </div>
        </div>
      </form>

      {hasSearched && (
        <div className="results-grid">
          {results.length > 0 ? (
            results.map((property) => (
              <Link
                key={property.id}
                to={`/property/${property.id}`}
                className="property-card"
              >
                <img src={property.picture} alt={property.title} />
                <div className="property-info">
                  <h3>{property.title}</h3>
                  <p>{property.description}</p>
                  <strong>£{property.price.toLocaleString()}</strong>
                </div>
              </Link>
            ))
          ) : (
            <p className="no-results">No properties match your search.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;