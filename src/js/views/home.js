import React, { useContext } from "react";
import { Navbar } from "../component/navbar";
import { AppContext } from "../store/appContext";
import { CardsPersonajes } from "../component/cardsPersonajes";
import { CardsPlanets } from "../component/cardsPlanets";
import { CardsVe } from "../component/cardsVe"
import "../component/styles/home.css";

const Home = () => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(AppContext);

  return (
    <>
      <div className="container-fluid">
        <Navbar
          favorites={favorites}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      </div>
      <div className="container">
        <h1 className="text-light m-3">Personajes</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 card-container d-flex flex-nowrap overflow-auto">
            <div className="">
              <CardsPersonajes />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <h1 className="text-light m-3">Planetas</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 card-container d-flex flex-nowrap overflow-auto">
            <div className="">
              <CardsPlanets />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <h1 className="text-light m-3">Vehiculos</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 card-container d-flex flex-nowrap overflow-auto">
            <div className="">
              <CardsVe />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Home };
