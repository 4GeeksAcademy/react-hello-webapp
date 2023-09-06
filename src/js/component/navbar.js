import React, { useContext } from "react";
import { Link } from "react-router-dom";
import otra from "../component/img/otra.png";
import { AppContext } from "../store/appContext";
import "../component/styles/navbar.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(AppContext);

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="main-content">
          <nav className="navbar navbar-light bg-back  fixed-top">
            <Link to="/">
              <img className="logo" src={otra} alt="Star"></img>
            </Link>

            <div className="">
              <div className=" dropdown">
                <button
                  className=" btndrop dropdown-toggle"
                  type="button"
                  id="favoritesDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Favoritos ({favorites.length})
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="favoritesDropdown"
                >
                  {favorites.length > 0 ? (
                    favorites.map((item) => (
                      <li key={item.url}>
                        <p className="favorite-item">
                          {item.name}
                          <button
                            className="btn-delete"
                            onClick={() => removeFromFavorites(item)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </p>
                      </li>
                    ))
                  ) : (
                    <li>
                      <p className="dropdown-item text-center">
                        No hay personajes <br />
                        favoritos
                      </p>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
