import React, { useEffect } from "react";

const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal fade show" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Confirmar eliminación</h2>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>¿Estás seguro de que deseas realizar esta accion?</p>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onConfirm}
            >
              Delate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
