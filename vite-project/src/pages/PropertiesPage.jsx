import React from "react";
import PropertyList from "../components/PropertyList";
import propertiesData from "../assets/properties.json";
import "../components/PropertyList.css";

const PropertiesPage = () => {
  return (
    <div
      style={{
        padding: "30px 40px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          color: "#2e7d32",
          textAlign: "center"
        }}
      >
        All Properties
      </h1>

      {/* ALL properties added here */}
      <PropertyList properties={propertiesData.properties} />
    </div>
  );
};

export default PropertiesPage;