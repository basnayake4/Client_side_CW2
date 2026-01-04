import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About PropertyHub</h1>

      <p className="about-text">
        PropertyHub is a modern real estate web application designed to help
        users easily search, explore, and manage property listings. The platform
        offers a clean and intuitive interface where users can browse properties
        and view detailed information.
      </p>

      <p className="about-text">
        Users can save their favourite properties using a clickable icon or by
        drag-and-drop interactions, allowing for a smooth and interactive user
        experience. Properties are presented using professional card layouts to
        ensure clarity and ease of navigation.
      </p>

      <p className="about-text">
        This application was developed using React and React Router, focusing on
        component reusability, responsive design, and consistent styling across
        all pages to simulate a real-world property browsing platform.
      </p>
    </div>
  );
};

export default AboutPage;