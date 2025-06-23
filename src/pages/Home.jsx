import React, { useContext } from "react";
import { Context } from "../store.jsx";
import CardItem from "../components/CardItem.jsx";

const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="container mt-4">
            <h2 className="text-warning">Characters</h2>
            <div className="row">
                {store.people.map(person => (
                    <div key={person.uid} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <CardItem item={person} type="people" />
                    </div>
                ))}
            </div>

            <h2 className="mt-5 text-success">Planets</h2>
            <div className="row">
                {store.planets.map(planet => (
                    <div key={planet.uid} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <CardItem item={planet} type="planets" />
                    </div>
                ))}
            </div>

            <h2 className="mt-5 text-info">Vehicles</h2>
            <div className="row">
                {store.vehicles.map(vehicle => (
                    <div key={vehicle.uid} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <CardItem item={vehicle} type="vehicles" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

