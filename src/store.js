export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contacts: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case "load_contacts": {
      return {
        ...store,
        contacts: action.playload
      }
    }
    default:
      throw Error('Unknown action.');
  }
}

export const obtenerContactos = async (dispatch) => {
  try {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/mati_b/contacts")
    if (response.status == 404) {
      await crearAgenda()
      return
    }
    const data = await response.json()
    dispatch({
      type: "load_contacts",
      playload: data.contacts
    })

  } catch (error) {
    console.log(error)
  }
}
export const crearAgenda = async () => {
  try {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/mati_b", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' }
    })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
export const crearContacto = async (dispatch, newContact) => {
  try {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/mati_b/contacts", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newContact)
    })
  } catch (error) {
    console.log(error)
  }
}
export const borrarContacto = async (dispatch, id) => {
  try {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/mati_b/contacts/" + id, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' },
    })

    obtenerContactos(dispatch)
  } catch (error) {
    console.log(error)
  }
}
export const editarContacto = async (dispatch, newContact, id) => {
  try {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/mati_b/contacts/" + id, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newContact)
    })
    obtenerContactos(dispatch)
  } catch (error) {
    console.log(error)
  }
}