import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const EditContact = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();

  const [editContact, setEditContact] = useState({
    full_name: "",
    email: "",
    agenda_slug: "jose_agenda",
    address: "",
    phone: "",
  });

  const getIndividualContact = () => {
    if (params) {
      fetch(`https://playground.4geeks.com/apis/fake/contact/${params.theid}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setEditContact(data);
        })
        .catch((error) => console.log(error));
    } else {
      console.log("Invalid ID provided", params.theid);
    }
  };

  useEffect(() => {
    getIndividualContact();
  }, []);

  const sendContact = (e) => {
    e.preventDefault();
    actions.handleSubmitModify(editContact);
    setEditContact({
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
      <h2 className="text-center">Edit contact</h2>
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
              setEditContact({ ...editContact, full_name: e.target.value })
            }
            value={editContact.full_name}
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
              setEditContact({ ...editContact, email: e.target.value })
            }
            value={editContact.email}
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
              setEditContact({ ...editContact, phone: e.target.value })
            }
            value={editContact.phone}
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
              setEditContact({ ...editContact, address: e.target.value })
            }
            value={editContact.address}
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

export default EditContact;
