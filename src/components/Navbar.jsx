import React, { useContext, useState } from "react";
import { Context } from "../store.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">
        StarWars Blog
      </Link>
      <div className="dropdown">
        <button
          className="btn btn-warning dropdown-toggle"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Favorites ({store.favorites.length})
        </button>
        {showDropdown && (
          <div className="dropdown-menu dropdown-menu-end show">
            {store.favorites.length === 0 ? (
              <span className="dropdown-item">No favorites</span>
            ) : (
              store.favorites.map((fav, index) => (
                <div
                  key={index}
                  className="dropdown-item d-flex justify-content-between align-items-center"
                >
                  <Link
                    to={`/details/${fav.type}/${fav.uid}`}
                    className="text-decoration-none"
                  >
                    {fav.name}
                  </Link>
                  <button
                    className="btn btn-sm btn-outline-danger ms-2"
                    onClick={() => actions.removeFavorite(fav.uid, fav.type)}
                  >
                    ❌
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
