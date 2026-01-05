import React, { useState } from "react";
import { DropdownList } from "react-widgets";
import "react-widgets/styles.css";
import propertiesData from "../assets/properties.json";
import "./Search.css";

function Search({ onSearch }) {
  const [type, setType] = useState("Any");
  const [postcode, setPostcode] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const results = propertiesData.properties.filter((p) => {
      if (type !== "Any" && p.type !== type) return false;
      if (
        postcode &&
        !p.location.toLowerCase().includes(postcode.toLowerCase())
      )
        return false;
      return true;
    });

    onSearch(results);
  };

  return (
    <div className="search-container">
      <form
        className="search-form"
        onSubmit={handleSearch}
        data-testid="search-form"
      >
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
            <input
              type="text"
              placeholder="BR, London"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
          </div>

          <div className="search-field">
            <button type="submit" data-testid="search-button">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;