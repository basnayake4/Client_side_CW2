import React from "react";

const AboutPage = () => {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "0 auto"
      }}
    >
      <h1 style={{ color: "#2e7d32" }}>About PropertyHub</h1>
      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
        PropertyHub is a modern real estate platform that allows users to
        search, view, and save properties based on their preferences.
        The system provides a clean interface, professional property cards,
        and a favourites feature for better user experience.
      </p>
    </div>
  );
};

export default AboutPage;