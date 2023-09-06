import React from "react";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaIconNam } from "react-icons/fa";
import { AiFillPhone, AiFillEdit } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";

const CardContent = ({ cardData, onEditClick, onDeleteClick }) => {
  return (
    <>
      <h5 className="card-title">
        <FaUser /> <b>{cardData.fullName}</b>
      </h5>
      <p className="card-text">
        <FaEnvelope /> {cardData.email}
      </p>
      <p className="card-text">
        <AiFillPhone /> {cardData.phone}
      </p>
      <p className="card-text">
        <FaMapMarkerAlt /> {cardData.address}
      </p>
      <div className="d-flex justify-content-end">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onEditClick}
          >
            <AiFillEdit />
          </button>
          <button
            type="button"
            className="btn btn-danger "
            onClick={onDeleteClick}
          >
            <BsTrashFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardContent;
