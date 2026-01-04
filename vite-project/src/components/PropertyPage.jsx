import React from "react";
import { useParams, Link } from "react-router-dom";
import propertiesData from "../assets/properties.json";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./PropertyPage.css";

const PropertyPage = () => {
  const { id } = useParams();
  const property = propertiesData.properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="property-page">
        <h2>Property not found</h2>
        <Link to="/">Go back to properties</Link>
      </div>
    );
  }

  // Prepare images array for ImageGallery
  const images = [];
  // Add main picture
  images.push({
    original: property.picture,
    thumbnail: property.picture,
  });

  // Add additional 5–7 images (mock URLs)
  for (let i = 2; i <= 7; i++) {
    images.push({
      original: `src/assets/images/${property.id}pic${i}.jpg`,
      thumbnail: `src/assets/images/${property.id}pic${i}.jpg`,
    });
  }

  return (
    <div className="property-page-container">
      <div className="property-main">
        <div className="gallery-section">
          <ImageGallery items={images} showPlayButton={false} />
        </div>

        <div className="property-summary">
          <h1>{property.type} • {property.bedrooms} BR</h1>
          <p className="price">LKR {property.price.toLocaleString()}</p>
          <p className="location">{property.location}</p>
        </div>
      </div>

      <div className="property-tabs">
        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Floor Plan</Tab>
            <Tab>Google Map</Tab>
          </TabList>

          <TabPanel>
            <div className="tab-content">
              <p>{property.description}</p>
              <p><strong>Tenure:</strong> {property.tenure}</p>
              <p><strong>Added:</strong> {property.added.day} {property.added.month}, {property.added.year}</p>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="tab-content">
              <h3>Floor Plan</h3>
              {/* Replace with actual floor plan images */}
              <img 
                src={`src/assets/images/${property.id}-floorplan.jpg`} 
                alt="Floor plan" 
                className="floor-plan" 
              />
            </div>
          </TabPanel>

          <TabPanel>
            <div className="tab-content">
              <h3>Location Map</h3>
              {/* Google Maps embed - replace with actual map */}
              <iframe
                title="Property Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <div className="back-link">
        <Link to="/">← Back to property list</Link>
      </div>
    </div>
  );
};

export default PropertyPage;