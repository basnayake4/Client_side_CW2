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

// Inside <Routes>...
<Route path="/properties" element={<PropertiesPage />} />
function App() {
  const [filteredProperties, setFilteredProperties] = useState(
    propertiesData.properties
  );

  return (
    <FavouritesProvider>
      <Router>
        <Header />
        <Routes>
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
          <Route path="/property/:id" element={<PropertyPage />} />
        </Routes>
        <Footer />
      </Router>
    </FavouritesProvider>
  );
}

export default App;