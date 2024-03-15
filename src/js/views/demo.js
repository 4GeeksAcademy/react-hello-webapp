import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import ContactCard from "../component/contactCard.jsx";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getContatcsList();
  }, [store.contactList]);

  return (
    <div className="container">
      <div className="list-group">
        {store.contactList.map((contact) => {
          return <ContactCard contact={contact} key={contact.id} />;
        })}
      </div>
      <section className="d-flex justify-content-between m-4">
        <Link to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
        <Link to="/addContact">
          <button className="btn btn-primary">Add new Contact</button>
        </Link>
      </section>
    </div>
  );
};
