import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Search from "./components/Search";
import PropertyList from "./components/PropertyList";
import PropertyPage from "./components/PropertyPage";
import Footer from "./components/Footer";
import propertiesData from "./assets/properties.json";
import "./App.css";

function App() {
  const [filteredProperties, setFilteredProperties] = useState(
    propertiesData.properties
  );

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <Search onSearch={setFilteredProperties} />
              <PropertyList properties={filteredProperties} />
            </>
          }
        />
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;