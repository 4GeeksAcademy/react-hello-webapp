import React, { useContext } from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";   

const ViewContacts = () => {

    const {store, dispatch} =useGlobalReducer()
    return (

        <div className = "ViewContacts"/>, <h2>View Contacts</h2>
    );
};

export default ViewContacts;