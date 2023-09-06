import React from "react";
import { MdSave } from "react-icons/md";

const FormularioContacto = ({ data, onChange, onClick }) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          placeholder="nombre"
          value={data.fullName}
          onChange={(e) => onChange({ ...data, fullName: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={data.email}
          onChange={(e) => onChange({ ...data, email: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone:
        </label>
        <input
          type="text"
          className="form-control"
          id="phone"
          placeholder="9999999"
          value={data.phone}
          onChange={(e) => onChange({ ...data, phone: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Dirección:
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          placeholder="calle 1 "
          value={data.address}
          onChange={(e) => onChange({ ...data, address: e.target.value })}
        />
        <button
          className="btn btn-outline-secondary m-2"
          type="button"
          onClick={onClick}
        >
          <MdSave />
        </button>
      </div>
    </>
  );
};

export default FormularioContacto;
