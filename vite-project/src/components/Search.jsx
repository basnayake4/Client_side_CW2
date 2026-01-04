import React, { useState } from "react";
import { DropdownList } from "react-widgets";
import "react-widgets/styles.css";
import propertiesData from "../assets/properties.json";
import "./Search.css";

function Search({ onSearch }) {
  const [type, setType] = useState("Any");
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [minBeds, setMinBeds] = useState(null);
  const [maxBeds, setMaxBeds] = useState(null);
  const [dateAfter, setDateAfter] = useState("");
  const [postcode, setPostcode] = useState("");

  const prices = [0, 100000, 200000, 300000, 400000, 500000, 750000, 1000000, 1500000];
  const bedrooms = [1, 2, 3, 4, 5];

  const handleSearch = (e) => {
    e.preventDefault();

    const results = propertiesData.properties.filter((p) => {
      if (type !== "Any" && p.type !== type) return false;
      if (minPrice !== null && p.price < minPrice) return false;
      if (maxPrice !== null && p.price > maxPrice) return false;
      if (minBeds !== null && p.bedrooms < minBeds) return false;
      if (maxBeds !== null && p.bedrooms > maxBeds) return false;

      if (dateAfter) {
        const addedDate = new Date(`${p.added.year}-${p.added.month}-01`);
        if (addedDate < new Date(dateAfter)) return false;
      }

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
      <form className="search-form" onSubmit={handleSearch}>
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
            <label>Min Price</label>
            <DropdownList data={prices} value={minPrice} onChange={setMinPrice} />
          </div>

          <div className="search-field">
            <label>Max Price</label>
            <DropdownList data={prices} value={maxPrice} onChange={setMaxPrice} />
          </div>

          <div className="search-field">
            <label>Min Beds</label>
            <DropdownList data={bedrooms} value={minBeds} onChange={setMinBeds} />
          </div>

          <div className="search-field">
            <label>Max Beds</label>
            <DropdownList data={bedrooms} value={maxBeds} onChange={setMaxBeds} />
          </div>

          <div className="search-field">
            <label>Date Added After</label>
            <input
              type="date"
              value={dateAfter}
              onChange={(e) => setDateAfter(e.target.value)}
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

          <div className="search-field search-button">
            <button type="submit">Search</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default Search;