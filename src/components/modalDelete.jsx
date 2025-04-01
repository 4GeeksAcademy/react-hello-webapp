import useGlobalReducer from "../hooks/useGlobalReducer"
import { borrarContacto } from "../store"

export const ModalDelete = ({ id, name }) => {
    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Eliminar Contacto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Estas seguro que desea borrar a {name} de contactos?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">cancelar</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => borrarContacto(dispatch, id)}>borrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}