import { useFavourites } from "../context/FavouritesContext";
import "./FavouritesSidebar.css";

const FavouritesSidebar = () => {
  const { favourites, addFavourite, removeFavourite, clearFavourites } =
    useFavourites();

  const handleDrop = (e) => {
    e.preventDefault();
    const property = JSON.parse(e.dataTransfer.getData("property"));
    addFavourite(property);
  };

  return (
    <div
      className="favourites-sidebar"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h3>⭐ Favourites</h3>

      {favourites.length === 0 && <p>Drag properties here</p>}

      {favourites.map((property) => (
        <div
          key={property.id}
          className="fav-item"
          draggable
          onDragStart={(e) =>
            e.dataTransfer.setData("removeId", property.id)
          }
        >
          <span>{property.type}</span>
          <button onClick={() => removeFavourite(property.id)}>❌</button>
        </div>
      ))}

      {favourites.length > 0 && (
        <button className="clear-btn" onClick={clearFavourites}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default FavouritesSidebar;