import React, { useContext } from "react";
import { Context } from "../store.js";
import CardItem from "../components/CardItem.jsx";

const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="container mt-4">
            <h2 className="text-warning">Characters</h2>
            <div className="d-flex overflow-auto gap-3">
                {store.people.map((person) => (
                    <CardItem key={person.uid} item={person} type="people" />
                ))}
            </div>

            <h2 className="mt-5 text-success">Planets</h2>
            <div className="d-flex overflow-auto gap-3">
                {store.planets.map((planet) => (
                    <CardItem key={planet.uid} item={planet} type="planets" />
                ))}
            </div>

            <h2 className="mt-5 text-info">Vehicles</h2>
            <div className="d-flex overflow-auto gap-3">
                {store.vehicles.map((vehicle) => (
                    <CardItem key={vehicle.uid} item={vehicle} type="vehicles" />
                ))}
            </div>
        </div>
    );
};

export default Home;
