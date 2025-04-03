import React from "react";
import { useNavigate } from "react-router-dom";


function CardContact(props) {

    const navigate = useNavigate()

    return (

        <>
            <div className="card bg-secondary" style={{ width: "12rem"}}>
                <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png" className="card-img-top" alt="Contact" />

                <div className="card-body">
                    <h5 className="card-title"> {props.contactName}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.contactMail}</li>
                    <li className="list-group-item">{props.contactPhone}</li>
                    <li className="list-group-item">{props.contactAddress}</li>
                </ul>
                <div className="card-body">
                    <a className="card-link" onClick={() => navigate(`/ViewContacts/${props.contactId}`)}> View Contact</a>
                    <a className="card-link">Another link</a>
                </div>
            </div>
        </>
    )
}
export default CardContact;