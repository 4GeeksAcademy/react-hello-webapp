import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Modal from "../component/modal";
import Navbar from "../component/navbar";
import usuario from "./usuario.png"; 
import FormularioContacto from "../component/formularioContacto";
import CardContent from "../component/cardContent";

const Home = () => {
  const { store, actions } = useContext(Context);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [editData, setEditData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (index) => {
    setDeleteIndex(index);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    const cardData = store.formulario[index].cardData;
    setEditData({ ...cardData });
  };

  const handleSave = () => {
    actions.editCard(editIndex, editData);
    setEditIndex(null);
    setEditData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {store.formulario.length > 0 ? (
          store.formulario.map((item, index) => (
            <div
              key={index}
              className="card mb-3"
              style={{ maxWidth: "100%", background: item.background }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={usuario}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    {editIndex === index ? (
                      <>
                        <FormularioContacto
                          data={editData}
                          onChange={setEditData}
                          onClick={handleSave}
                        />
                      </>
                    ) : (
                      <>
                        <CardContent
                          cardData={item.cardData}
                          onEditClick={() => handleEdit(index)}
                          onDeleteClick={() => handleOpenModal(index)}
                        />
                        <Modal
                          show={showModal}
                          onClose={handleCloseModal}
                          onConfirm={() => {
                            actions.deleteCard(deleteIndex);
                            handleCloseModal();
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay tarjetas disponibles.</p>
        )}
      </div>
    </>
  );
};

export { Home };
