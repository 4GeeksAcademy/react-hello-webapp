import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  return (
    <div className="text-center mt-5">
      <h1>WELCOME TO YOUR AGENDA</h1>
      <Link to="/Demo">
        <button className="btn btn-primary">Contacts</button>
      </Link>
    </div>
  );
};
