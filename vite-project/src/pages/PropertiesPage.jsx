import React from "react";
import PropertyList from "../components/PropertyList";
import propertiesData from "../assets/properties.json";
import "../components/PropertyList.css"; // <- fixed path

const PropertiesPage = () => {
  return (
    <div style={{ padding: "20px 40px" }}>
      {/* Page heading */}
      <h1 style={{ marginBottom: "20px", color: "#2e7d32" }}>
        All Properties
      </h1>

      {/* PropertyList will display ALL properties in multiple rows */}
      <PropertyList properties={propertiesData.properties} />
    </div>
  );
};

export default PropertiesPage;