import React from "react";
import { Link } from "react-router-dom";
import "./PropertyList.css";

const PropertyList = ({ properties }) => {
  if (!properties || properties.length === 0) {
    return (
      <div className="property-list-container">
        <p>No properties match your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="property-list-container">
      <div className="property-grid">
        {properties.map((property) => (
          <Link
            key={property.id}
            to={`/property/${property.id}`}
            className="property-card-link"
          >
            <div className="property-card">
              <img
                src={property.picture}
                alt={property.type}
                className="property-image"
              />

              <div className="property-card-body">
                <h3>{property.type} • {property.bedrooms} Beds</h3>
                <p className="price">
                  LKR {property.price.toLocaleString()}
                </p>
                <p className="location">{property.location}</p>
                <p className="description">
                  {property.description.substring(0, 80)}...
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;