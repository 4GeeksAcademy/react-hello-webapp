const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      /**
       *TODO Here I should add the values that comes from the API
       */
      contactList: [],
      individualContact: {
        full_name: "",
        email: "",
        agenda_slug: "jose_agenda",
        address: "",
        phone: "",
      },
    },
    actions: {
      /**
       *TODO use the GET method to get the full list and the detail contact
       */

      // get all contacts from the user agenda
      getContatcsList: () => {
        fetch(
          "https://playground.4geeks.com/apis/fake/contact/agenda/jose_agenda"
        )
          .then((response) => response.json())
          .then((data) => setStore({ contactList: data }))
          .catch((error) => console.log(error));
      },
      /// get the contact data that the user clicked on

      /**
       *TODO Update the contact in the API
       */

      handleSubmit: (contact) => {
        fetch("https://playground.4geeks.com/apis/fake/contact/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contact),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => console.log(data))
          .catch((error) => console.error("Error:", error));
      },

      // Modify an existing user
      handleSubmitModify: (contact) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${contact.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contact),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => console.log(data))
          .catch((error) => console.error("Error:", error));
      },

      /**
       *TODO Delete contact in the API
       */
      deleteContact: (theid) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${theid}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
