import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { obtenerContactos } from "../store.js";
import { Card } from "../components/card.jsx";
import { ModalDelete } from "../components/modalDelete.jsx";
import { ModalEdit } from "../components/modalEdite.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [showModalDelete, setShowModalDelete] = useState({
		showModal: false,
		id: undefined,
		name: undefined,
	})
	const [showModalEdit, setShowModalEdit] = useState({
		showModal: false,
		id: undefined,
		contact: undefined,
	})

	useEffect(() => {
		obtenerContactos(dispatch)
	}, [])

	console.log(store.contacts)
	return (
		<div className="text-center mt-5">
			<h1>Contact List</h1>
			{store.contacts.length > 0 ? (
				<div className="d-flex flex-column align-items-center">
					{store.contacts.map((contacto) => (
						<Card
							key={contacto.id}
							id={contacto.id}
							name={contacto.name}
							address={contacto.address}
							phone={contacto.phone}
							email={contacto.email}
							onDelete={() => setShowModalDelete({ showModal: true, id: contacto.id, name: contacto.name })}
							onEdit={() => setShowModalEdit({ showModal: true, id: contacto.id, contact: contacto })}
						/>
					))}
				</div>
			) : (
				<p> no existen contactos</p>
			)}

			<ModalDelete
				id={showModalDelete.id}
				name={showModalDelete.name}
				show={showModalDelete.showModal}
				onClose={() => setShowModalDelete({ showModal: false })}
			/>
			<ModalEdit
				id={showModalEdit.id}
				contact={showModalEdit.contact}
				show={showModalEdit.showModal}
				onClose={() => setShowModalEdit({ showModal: false })}
			/>
		</div>
	);
};