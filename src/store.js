export const initialStore = () => {
  return {

    contacts: [
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

    case "addContact":
      return {
        ...store,
        contacts: action.payload
      };

    case "editcontact":
      return {
        ...store,
        contacts: [...store.contacts, action.payload]
      };

    case "deleteContact":

      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== action.payload)
      };

   

  default: return store;

  }

   
}

 