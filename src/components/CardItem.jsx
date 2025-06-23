import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store.jsx";

const CardItem = ({ item, type }) => {
    // Construimos la URL de la imagen según el tipo y uid del item
    const imageURL = `https://starwars-visualguide.com/assets/img/${type === "people" ? "characters" : type}/${item.uid}.jpg`;

    // Acceso a las acciones desde el contexto (por ejemplo para favoritos)
    const { actions } = useContext(Context);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                src={imageURL}
                className="card-img-top"
                alt={item.name}
                // Si la imagen no carga, usamos un placeholder genérico
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
                }}
            />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/details/${type}/${item.uid}`} className="btn btn-outline-primary">
                        Learn more
                    </Link>
                    <button
                        className="btn btn-outline-warning"
                        onClick={() => actions.addFavorite({ uid: item.uid, name: item.name, type })}
                    >
                        ❤️
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
