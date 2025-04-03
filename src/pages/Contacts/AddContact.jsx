import React from "react";    
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";   

 const AddContact = () => {

    const {store, dispatch} =useGlobalReducer()
    return (

        <div className = "addContact"/>, <h2>Add Contacts</h2>
    );
};

export default AddContact;
    