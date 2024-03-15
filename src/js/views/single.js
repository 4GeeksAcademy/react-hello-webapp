import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import ContactCard from "../component/contactCard.jsx";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [singleContact, setSingleContact] = useState({});
  const navigate = useNavigate();

  // traer los datos del id en el que se hace click en caso de que no sea undefined
  const getIndividualContact = () => {
    if (params) {
      fetch(`https://playground.4geeks.com/apis/fake/contact/${params.theid}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSingleContact(data);
        })
        .catch((error) => console.log(error));
    } else {
      console.log("Invalid ID provided", params.theid);
    }
  };

  useEffect(() => {
    getIndividualContact();
  }, []);

  return (
    <div>
      <ContactCard contact={singleContact} />
      <div className="m-4 d-flex justify-content-around">
        <Link to="/">
          <button className="btn btn-primary">Home</button>
        </Link>
        <Link to="/demo">
          <button className="btn btn-primary">Contacts</button>
        </Link>
      </div>
    </div>
  );
};
