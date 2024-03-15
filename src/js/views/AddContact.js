import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContact = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();

  const [newContact, setNewContact] = useState({
    full_name: "",
    email: "",
    agenda_slug: "jose_agenda",
    address: "",
    phone: "",
  });

  const sendContact = (e) => {
    e.preventDefault();
    actions.handleSubmit(newContact);
    setNewContact({
      full_name: "",
      email: "",
      agenda_slug: "jose_agenda",
      address: "",
      phone: "",
    });
    navigate("/demo");
  };

  return (
    <div className="container p-3">
      <h2 className="text-center">Add a new contact</h2>
      <form className="row g-3" onSubmit={sendContact}>
        <div className="col-md-12">
          <label htmlFor="inputName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
            name="full_name"
            onChange={(e) =>
              setNewContact({ ...newContact, full_name: e.target.value })
            }
            value={newContact.full_name}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            onChange={(e) =>
              setNewContact({ ...newContact, email: e.target.value })
            }
            value={newContact.email}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputPhone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter phone"
            name="phone"
            onChange={(e) =>
              setNewContact({ ...newContact, phone: e.target.value })
            }
            value={newContact.phone}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter address"
            name="address"
            onChange={(e) =>
              setNewContact({ ...newContact, address: e.target.value })
            }
            value={newContact.address}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Save
          </button>

          <Link className="m-2" to="/demo">
            <button className="btn btn-primary">Contacts</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
