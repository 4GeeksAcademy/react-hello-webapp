export const initialStore = () => {
  return {

    "contacts": [
      {
        "name": "",
        "phone": "",
        "email": "",
        "address": "",
        "id": 0
      }
    ]
  }
}


export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'añadirContacto':
      return {
        ...store, agendas: action.payload
      };

    case 'editarContacto':
      return {

        ...store,
        contacts: store.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload :
            contact.name
        )
      };

    case 'eliminarContacto':

      return {
        ...store,
        contacts: store.contact.filter(contact => contact.id !== action.payload)
      };

    default:
      throw new Error("Unknow Action.");

  }
}