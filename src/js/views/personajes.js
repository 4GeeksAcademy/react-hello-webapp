import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../store/appContext";
import "../component/styles/single.css";
import { Navbar } from "../component/navbar";

const Personajes = () => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(AppContext);

  const [character, setCharacter] = useState(null);

  const { theid } = useParams();

  const isFavorite =
    character && favorites.some((fav) => fav.id === character.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(character);
    } else {
      addToFavorites(character);
    }
  };

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${theid}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("error");
        }
        return response.json();
      })
      .then((data) => {
        // Guarda los detalles del personaje en el estado
        setCharacter(data);
      })
      .catch((error) => {
        console.error("Error fetching character details:", error);
      });
  }, [theid]);

  const getCharacterImage = () => {
    if (!character) return null;
    const characterId = character.url.split("/").filter(Boolean).slice(-1)[0];
    return `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
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
      {character ? (
        <>
          <div className="container">
            <div className="row ">
              <div className="col-12 col-md-4">
                <img
                  src={getCharacterImage()}
                  className="img-fluid rounded-start w-100"
                  alt={character.name}
                />
              </div>
              <div className="col-12 col-md-8 ">
                <div className="card-body-single text-center m-5">
                  <h1 className="card-title">{character.name}</h1>
                  <p className="card-text">
                    <b>Altura:</b> {character.height} cm
                  </p>
                  <p className="card-text">
                    <b>Peso:</b> {character.mass} kg
                  </p>
                  <p className="card-text">
                    <b>Color de pelo:</b> {character.hair_color}
                  </p>
                  <p className="card-text">
                    <b>Color de piel:</b> {character.skin_color}
                  </p>
                  <p className="card-text">
                    <b>Color ojos:</b> {character.eye_color}
                  </p>
                  <p className="card-text">
                    <b>Año de nacimiento:</b> {character.birth_year}
                  </p>
                  <p className="card-text">
                    <b>Género:</b> {character.gender}
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
          {character === null ? "Cargando..." : "Character not found"}
        </h2>
      )}
    </div>
  );
};

export { Personajes };
