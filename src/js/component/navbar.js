import React from "react";
import { Link } from "react-router-dom";
import agenda from "./agenda.png";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light mb-3">
        <Link to="/">
          <img
            src={agenda}
            className="img-fluid rounded-start m-3"
            style={{ maxWidth: "40px" }}
            alt="..."
          />
        </Link>
        <h1>Tus Contactos</h1>
        <div className="ml-auto">
          <Link to="/formulario">
            <button className="btn btn-primary">
              Agrega un nuevo contacto
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
