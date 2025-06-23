import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store.jsx";

const CardItem = ({ item, type }) => {
  const { actions, store } = useContext(Context);

  const isFavorite = store.favorites.some(fav => fav.uid === item.uid && fav.type === type);

  // URL imagen basada en starwars-visualguide.com
  const imageURL = `https://starwars-visualguide.com/assets/img/${type === "people" ? "characters" : type}/${item.uid}.jpg`;

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={imageURL}
        className="card-img-top"
        alt={item.name}
        onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.name}</h5>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <Link to={`/single/${type}/${item.uid}`} className="btn btn-primary btn-sm">
            Learn More
          </Link>
          <button
            className={`btn btn-sm ${isFavorite ? "btn-danger" : "btn-outline-warning"}`}
            onClick={() => {
              if (isFavorite) {
                actions.removeFavorite(item.uid, type);
              } else {
                actions.addFavorite({ ...item, type });
              }
            }}
          >
            {isFavorite ? "Remove Favorite" : "Add Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

