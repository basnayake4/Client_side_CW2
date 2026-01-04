import React from "react";
import { useFavourites } from "../context/FavouritesContext";
import PropertyList from "../components/PropertyList";
import "../components/PropertyList.css";

const FavouritesPage = () => {
  const { favourites, clearFavourites } = useFavourites();

  return (
    <div
      style={{
        padding: "30px 40px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2e7d32" }}>
        Favourite Properties
      </h1>

      {favourites.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No favourite properties added yet.
        </p>
      ) : (
        <>
          <PropertyList properties={favourites} />
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button onClick={clearFavourites}>Clear Favourites</button>
          </div>
        </>
      )}
    </div>
  );
};

export default FavouritesPage;