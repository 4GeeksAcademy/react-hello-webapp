import React, { useContext, useState, useEffect } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext";
import "../component/styles/card.css";

const CardsPlanets = () => {
  const [planetas, setPlanetas] = useState([]);
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(AppContext);

  const isFavorite = (planetas) => {
    return favorites.some((fav) => fav.url === planetas.url);
  };

  const toggleFavorite = (planeta) => {
    if (isFavorite(planeta)) {
      removeFromFavorites(planeta);
    } else {
      addToFavorites(planeta);
    }
  };
  const getPlanetaId = (url) => {
    const matches = url.match(/\/(\d+)\/$/);
    return matches ? matches[1] : "";
  };

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data) => setPlanetas(data.results));
  }, []);

  const handleLearnMore = (planetaId) => {
    fetch(`https://swapi.dev/api/planets/${planetaId}/`)
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Error fetching planeta details:", error);
      });
  };

  return (
    <div className="card-container d-flex flex-nowrap overflow-auto">
      {planetas.map((planeta) => (
        <div className="card" style={{ width: "18rem" }} key={planeta.url}>
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${getPlanetaId(
              planeta.url
            )}.jpg`}
            className="card-img-top"
            alt={planeta.name}
          />
          <div className="card-body">
            <h5 className="card-title">{planeta.name}</h5>
            <p className="card-text">Clima: {planeta.climate}</p>
            <p className="card-text">Terreno: {planeta.terrain}</p>
            <Link
              to={`/planeta/${getPlanetaId(planeta.url)}`}
              className="btn btn-outline-light"
              onClick={() => handleLearnMore(getPlanetaId(planeta.url))}
            >
              Aprende más!
            </Link>
            <button
              className="btn btn-outline-light position-absolute bottom-5 end-0 "
              onClick={() => toggleFavorite(planeta)}
            >
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  color: isFavorite(planeta) ? "rgb(5, 223, 252)" : "white",
                }}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export { CardsPlanets };
