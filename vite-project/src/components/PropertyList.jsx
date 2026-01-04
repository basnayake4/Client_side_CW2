import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";
import "./PropertyList.css";

const PropertyList = ({ properties }) => {
  const { favourites, addFavourite, removeFavourite } = useFavourites();

  const isFavourite = (id) =>
    favourites.some((property) => property.id === id);

  const toggleFavourite = (property) => {
    if (isFavourite(property.id)) {
      removeFavourite(property.id);
    } else {
      addFavourite(property);
    }
  };

  return (
    <div className="property-list-container">
      <div className="property-grid">
        {properties.map((property) => (
          <div
            key={property.id}
            className="property-card-wrapper"
            draggable
            onDragStart={(e) =>
              e.dataTransfer.setData("property", JSON.stringify(property))
            }
          >
            {/* Favourite Heart Button */}
            <button
              className={`heart-btn ${
                isFavourite(property.id) ? "active" : ""
              }`}
              onClick={() => toggleFavourite(property)}
              aria-label="Add to favourites"
            >
              ♥
            </button>

            {/* Property Card */}
            <Link
              to={`/property/${property.id}`}
              className="property-card-link"
            >
              <div className="property-card">
                <img
                  src={property.picture}
                  alt={property.type}
                  className="property-image"
                />

                <div className="property-card-body">
                  <h3>
                    {property.type} • {property.bedrooms} Beds
                  </h3>
                  <p className="price">
                    LKR {property.price.toLocaleString()}
                  </p>
                  <p className="location">{property.location}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;