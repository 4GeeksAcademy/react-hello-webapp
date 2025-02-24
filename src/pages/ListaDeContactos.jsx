import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const ListaDeContactos = async () => {
    const { store, dispatch } = useGlobalReducer()
    const getContacts = async () => {
        try {
            const response = await fletch()
            if (!response.ok) throw new Error("No se pudo cargar los datos.")
            const data =  await response.json()

            console.log (data.contacts);

            dispatch(
                {
                    type: actualizarContacto,
                    payload: data.contacts
                }
            )
        } catch (error) {

        }

        return (

            <>
            <ul className="task-list"> 
                {store.contacts.lengh === 0 ? (
                <p> No Hay .</p>
                ) :
                (
                   toDoArray.map(toDo) => (
                    <ToDoItem
                        key={toDo.idCounter}
                        tarea={toDo.tarea}
                        idCounter={toDo.idCounter}
                        deleteTask={() => eliminarTarea(toDo.idCounter)}
                   ))
                )}
            </ul>
            </>
        

           useEffect(() => {getContacts()},[])  
    }

