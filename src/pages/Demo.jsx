// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useState } from "react";
import { crearContacto } from "../store";

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

const [nombre,setNombre] = useState("")
const [direccion,setDireccion] = useState("")
const [mail,setMail] = useState("")
const [telefono,setTelefono] = useState("")

const agregarContacto =(e)=>{
  e.preventDefault()
if (nombre == ""){
  alert ("Debe ingresar nombre completo")
  return
}
if (mail == ""){
  alert ("Debe ingresar E-mail")
  return
}
if (direccion == ""){
  alert ("Debe ingresar direccion")
  return
}
if (telefono == ""){
  alert ("Debe ingresar numero de telefono")
  return
}
  const newContact = {
    "name": nombre,
    "phone": telefono,
    "email": mail,
    "address": direccion,
  }
  crearContacto (dispatch,newContact)
  setNombre("")
  setTelefono("")
  setDireccion("")
  setMail("")
}
  return (
    <div className="container mt-5 mb-5 p-5">
      <h2 className="text-center">Agregar Contacto</h2>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Nombre Completo</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Numero de telefono</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">E-mail</span>
        <input type="mail" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={mail} onChange={(e)=>setMail(e.target.value)}/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">direccion</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={direccion} onChange={(e)=>setDireccion(e.target.value)}/>
      </div>
      <div className="d-flex  justify-content-center">
        <button className="btn btn-success" onClick={(e)=>agregarContacto(e)}>
          Agregar Contacto
        </button>
      </div>
    </div>
  );
};