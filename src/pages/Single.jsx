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

  const imageURL = `https://starwars-visualguide.com/assets/img/${
    type === "people" ? "characters" : type
  }/${uid}.jpg`;

  if (!data) return <p>Loading...</p>;

  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={imageURL}
          alt={data.properties.name}
          className="img-fluid rounded"
          onError={e => {
            e.target.onerror = null;
            e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
          }}
        />
      </div>
      <div className="col-md-6">
        <h2>{data.properties.name}</h2>
        <p>{data.description}</p>
        <ul className="list-group">
          {Object.entries(data.properties).map(([key, value]) => (
            <li key={key} className="list-group-item">
              <strong>{key.replace(/_/g, " ")}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Single;
