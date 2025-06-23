import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Single from "./Single.jsx";
import Navbar from "../components/Navbar.jsx";
import { Context } from "../store.js";

const Layout = () => {
    const { actions } = useContext(Context);

    // Cargar la data solo una vez
    useEffect(() => {
        actions.loadData();
    }, []);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:type/:uid" element={<Single />} />
                <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Layout;
