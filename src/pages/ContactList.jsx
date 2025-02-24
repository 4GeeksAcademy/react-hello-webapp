import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { func } from "prop-types"


export const ContactList = () => {

    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        const getContacts = async () => {
            try {
                const response = await fletch('https://playground.4geeks.com/contact/agendas/Dani');

                if (!response.ok) {
                    throw new Error("No se pudo cargar los datos.");
                }

                const data = await response.json();

                setContacts(data.contact)

                console.log(data.contacts);

                dispatch(
                    {
                        type: editontact,
                        payload: {contact: data.contact}
                    }
                )
            }

            catch (error) { console.error("No se descargaron los datos"); };


            return (
                <>
                    <ul className="task-list">
                        {store.contacts.length === 0 ? (
                            <p>No Hay Tareas Pendientes</p>
                        ) : (
                            store.contacts.map((contact) => (

                                <ToDoItem
                                    key={toDo.idCounter}
                                    tarea={toDo.tarea}
                                    idCounter={toDo.idCounter}
                                    deleteTask={() => deleteTask(toDo.idCounter)}
                                />
                            ))
                        )}
                    </ul>
                </>
            );






            useEffect(() => { getContacts() }, [])
        }
    };
