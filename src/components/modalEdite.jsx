import useGlobalReducer from "../hooks/useGlobalReducer"
import { editarContacto } from "../store"
import { useEffect, useState } from "react"

export const ModalEdit = ({ id, contact }) => {
    const { store, dispatch } = useGlobalReducer()
    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [mail, setMail] = useState("")
    const [telefono, setTelefono] = useState("")

    const editar = (e) => {
        e.preventDefault()
        if (nombre == "") {
            alert("Debe ingresar nombre completo")
            return
        }
        if (mail == "") {
            alert("Debe ingresar E-mail")
            return
        }
        if (direccion == "") {
            alert("Debe ingresar direccion")
            return
        }
        if (telefono == "") {
            alert("Debe ingresar numero de telefono")
            return
        }
        const newContact = {
            "name": nombre,
            "phone": telefono,
            "email": mail,
            "address": direccion,
        }
        editarContacto(dispatch, newContact, id)
        setNombre("")
        setTelefono("")
        setDireccion("")
        setMail("")
    }

    const infoContact = () => {
        setNombre(contact?.name)
        setTelefono(contact?.phone)
        setDireccion(contact?.address)
        setMail(contact?.mail)
    }

    useEffect(() => {
        infoContact()
    }, [])

    return (
        <div className="modal fade" id="exampleModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Contacto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Nombre Completo</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Numero de telefono</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">E-mail</span>
                            <input type="mail" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={mail} onChange={(e) => setMail(e.target.value)} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">direccion</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">cancelar</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal"
                         onClick={(e)=>editar(e)}
                        >editar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}