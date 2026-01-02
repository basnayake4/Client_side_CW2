import React, { useEffect, useState } from "react";
import propertiesData from "../assets/properties.json";
import "./PropertyList.css";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(propertiesData.properties);
  }, []);

  return (
    <div className="property-list-container">
      <h1>Available Properties</h1>
      <div className="property-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <h2>{property.type} - {property.bedrooms} BR</h2>
            <p className="location"><span>Location:</span> {property.location}</p>
            <p className="price"><span>Price:</span> LKR {property.price.toLocaleString()}</p>
            <p className="description">{property.description}</p>
            <div className="image-carousel">
              {Array.from({ length: 8 }).map((_, index) => (
                <img
                  key={index}
                  src={
                    property.images && property.images[index]
                      ? property.images[index]
                      : "https://via.placeholder.com/300x200"
                  }
                  alt={`${property.type} image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;