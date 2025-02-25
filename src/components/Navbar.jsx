import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
	const navigate = useNavigate();

	const goHome =() => {
		navigate('/');
	};
	const goBack = () => {
		navigate(-1);
	};


	return (
		<nav className="navbar navbar-light bg-black">
			<ul className="cnav-links">
				<li>
					<Link to="/contact_list">Lista de contactos</Link>
				</li>
				
				<li>
					<Link to="/">Acerca de</Link>
				</li>
				
				<li>
					<Link to="/">Contacto</Link>
				</li>
				
				</ul>
				
		</nav>
	);
};

export default Navbar;