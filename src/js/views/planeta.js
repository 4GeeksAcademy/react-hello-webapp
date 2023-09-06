import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../store/appContext";
import "../component/styles/single.css";
import { Navbar } from "../component/navbar";

const Planeta = () => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(AppContext);

  const [planeta, setplaneta] = useState(null);

  const { theid } = useParams();

  const isFavorite = planeta && favorites.some((fav) => fav.id === planeta.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(planeta);
    } else {
      addToFavorites(planeta);
    }
  };

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${theid}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("error");
        }
        return response.json();
      })
      .then((data) => {
        // Guarda los detalles del personaje en el estado
        setplaneta(data);
      })
      .catch((error) => {
        console.error("Error fetching planeta details:", error);
      });
  }, [theid]);

  const getplanetaImage = () => {
    if (!planeta) return null;
    const planetaId = planeta.url.split("/").filter(Boolean).slice(-1)[0];
    return `https://starwars-visualguide.com/assets/img/planets/${planetaId}.jpg`;
  };

  return (
    <div>
      <div className="container-fluid">
        <Navbar
          favorites={favorites}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      </div>
      {planeta ? (
        <>
          <div className="container">
            <div className="row ">
              <div className="col-12 col-md-4">
                <img
                  src={getplanetaImage()}
                  className="img-fluid rounded-start w-100"
                  alt={planeta.name}
                />
              </div>
              <div className="col-12 col-md-8 ">
                <div className="card-body-single text-center m-5">
                  <h1 className="card-title">{planeta.name}</h1>
                  <p className="card-text">
                    <b>Periodo de rotacion:</b> {planeta.rotation_period}
                  </p>
                  <p className="card-text">
                    <b>Diametro:</b> {planeta.diameter}
                  </p>
                  <p className="card-text">
                    <b>Clima:</b> {planeta.climate}
                  </p>
                  <p className="card-text">
                    <b>Gravedad:</b> {planeta.gravity}
                  </p>
                  <p className="card-text">
                    <b>Terreno:</b> {planeta.terrain}
                  </p>
                  <p className="card-text">
                    <b>Superficie del agua:</b> {planeta.surface_water}
                  </p>
                  <p className="card-text">
                    <b>Población:</b> {planeta.population}
                  </p>

                  <button className="btnsingle" onClick={handleToggleFavorite}>
                    {isFavorite
                      ? "Eliminar de favoritos"
                      : "Agregar a favorito"}
                  </button>
                  <br />
                  <br />
                  <button className="btnsingle">
                    <Link to="/">Volver</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h2 className="text-white text-center">
          {planeta === null ? "Cargando..." : "Character not found"}
        </h2>
      )}
    </div>
  );
};

export { Planeta };
