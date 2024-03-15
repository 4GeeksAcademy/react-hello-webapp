import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

//import image
import profPic from "../../img/icon-256x256.png";

//importing icons
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const ContactCard = ({ contact, key }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleDeleteContact = async (contact) => {
    try {
      await actions.deleteContact(contact.id);
      navigate(`/demo`);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <>
      <div className=" container row g-0">
        <div key={key} className="card col-md-10">
          <div
            className="col"
            key={contact.id}
            onClick={() => navigate(`/single/${contact.id}`)}
          >
            <div className="row g-0">
              <div className=" col-md-3 px-3 py-2 d-flex align-items-center justify-content-around">
                <img
                  src={profPic}
                  className="img-fluid rounded-circle w-50"
                  alt="user profile picture"
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">{contact.full_name}</h5>
                  <p className="card-text">
                    <IoLocationSharp className="m-2" /> {contact.address}
                  </p>
                  <p className="card-text">
                    <FaPhoneFlip className="m-2" /> {contact.phone}
                  </p>
                  <p className="card-text">
                    <FaEnvelope className="m-2" /> {contact.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-auto d-flex align-items-center justify-content-end border">
          <button
            className="btn btn-sm align-self-center" // Add btn-sm for smaller buttons if desired
            onClick={() => navigate(`/editContact/${contact.id}`)}
          >
            <FaPencilAlt />
          </button>
          <button
            type="button"
            className="btn btn-sm align-self-center" // Add btn-sm for smaller buttons if desired
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <FaTrash />
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Do you want to delete the contact?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => handleDeleteContact(contact)}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
