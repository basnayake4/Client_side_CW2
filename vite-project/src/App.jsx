import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { FavouritesProvider } from "./context/FavouritesContext";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Search from "./components/Search";
import PropertyList from "./components/PropertyList";
import PropertyPage from "./components/PropertyPage";
import FavouritesSidebar from "./components/FavouritesSidebar";
import Footer from "./components/Footer";

import propertiesData from "./assets/properties.json";
import "./App.css";

import PropertiesPage from "./pages/PropertiesPage";
import FavouritesPage from "./pages/FavouritesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [filteredProperties, setFilteredProperties] = useState(
    propertiesData.properties
  );

  return (
    <FavouritesProvider>
      <Router>
        <div className="app-container">
          <Header />

          <div className="main-content-wrapper">
            <Routes>
              {/* Home Page */}
              <Route
                path="/"
                element={
                  <>
                    <Intro />
                    <Search onSearch={setFilteredProperties} />

                    <div className="main-content">
                      <PropertyList properties={filteredProperties} />
                      <FavouritesSidebar />
                    </div>
                  </>
                }
              />

              {/* Separate pages */}
              <Route path="/properties" element={<PropertiesPage />} />
              <Route path="/favourites" element={<FavouritesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Property Details */}
              <Route path="/property/:id" element={<PropertyPage />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </FavouritesProvider>
  );
}

export default App;