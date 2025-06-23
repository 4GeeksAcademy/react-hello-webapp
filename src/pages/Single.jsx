import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = () => {
    const { type, uid } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const res = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
                const json = await res.json();
                setData(json.result);
            } catch (err) {
                console.error("Error loading details", err);
            }
        };

        fetchDetails();
    }, [type, uid]);

    const imageURL = `https://starwars-visualguide.com/assets/img/${type === "people" ? "characters" : type}/${uid}.jpg`;

    return (
        <div className="container mt-4">
            {!data ? (
                <p>Loading...</p>
            ) : (
                <div className="row">
                    <div className="col-md-6">
                        <img src={imageURL} className="img-fluid" alt={data.properties.name} />
                    </div>
                    <div className="col-md-6">
                        <h2>{data.properties.name}</h2>
                        <p><strong>Description:</strong> {data.description}</p>
                        <ul className="list-group">
                            {Object.entries(data.properties).map(([key, value]) => (
                                <li key={key} className="list-group-item">
                                    <strong>{key}:</strong> {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Single;
