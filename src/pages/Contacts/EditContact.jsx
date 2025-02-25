import React from "react";    
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";   

const EditContact = () => {

    const {store, dispatch} =useGlobalReducer()

    return (

        <div className = "EditContacts"/>, <h2>Edit Contacts</h2>
    );
};

export default EditContact;