import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import propertiesData from "../assets/properties.json";
import "./PropertyPage.css";

const TABS = [
  { id: "description", label: "Description" },
  { id: "floorplan", label: "Floor Plan" },
  { id: "map", label: "Map" },
];

const PropertyPage = () => {
  const { id } = useParams();
  const property = propertiesData.properties.find((p) => p.id.toString() === id);
  const [activeTab, setActiveTab] = useState("description");

  if (!property) {
    return (
      <div className="property-page-container">
        <h2>Property not found</h2>
        <Link to="/">Go back to properties</Link>
      </div>
    );
  }

  // Images: main + 6 thumbnails
  const images = [property.picture];
  for (let i = 2; i <= 7; i++) {
    images.push(`src/assets/images/${property.id}pic${i}.jpg`);
  }

  return (
    <div className="property-page-container">
      {/* Images Grid */}
      <div className="property-images-grid">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${property.type} ${idx + 1}`}
            className={idx === 0 ? "main-image" : "thumbnail-image"}
          />
        ))}
      </div>

      {/* Summary */}
      <div className="property-summary">
        <h1>{property.type} • {property.bedrooms} BR</h1>
        <p className="price">LKR {property.price.toLocaleString()}</p>
        <p className="location">{property.location}</p>
      </div>

      {/* Tabs */}
      <div className="property-tabs">
        <div className="tabs-row">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`property-tab${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {activeTab === "description" && (
            <div>
              <h3>Description</h3>
              <p>{property.description}</p>
              <p><strong>Tenure:</strong> {property.tenure}</p>
              <p><strong>Added:</strong> {property.added.day} {property.added.month}, {property.added.year}</p>
            </div>
          )}
          {activeTab === "floorplan" && (
            <div>
              <h3>Floor Plan</h3>
              <img
                src={`src/assets/images/${property.id}-floorplan.jpg`}
                alt="Floor plan"
                className="floor-plan"
              />
            </div>
          )}
          {activeTab === "map" && (
            <div>
              <h3>Location Map</h3>
              <iframe
                title="Property Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <div className="back-link" style={{ marginTop: 24 }}>
        <Link to="/">← Back to property list</Link>
      </div>
    </div>
  );
};

export default PropertyPage;