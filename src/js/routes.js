import React from "react"
import injectContext from "./store/appContext";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import Layout from "./layout"


const AppRoutes=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/single/:theid" element={<Single />} />
                    <Route path="*" element={(<h1>Route not found</h1>)}/>                
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default injectContext(AppRoutes)