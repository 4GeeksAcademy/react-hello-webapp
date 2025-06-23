import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store.js";

const CardItem = ({ item, type }) => {
    const { actions } = useContext(Context);
    const imageURL = `https://starwars-visualguide.com/assets/img/${type === "people" ? "characters" : type}/${item.uid}.jpg`;

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imageURL} className="card-img-top" alt={item.name} onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/details/${type}/${item.uid}`} className="btn btn-outline-primary">
                        Learn more
                    </Link>
                    <button className="btn btn-outline-warning" onClick={() => actions.addFavorite({ uid: item.uid, name: item.name, type })}>
                        ❤️
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
