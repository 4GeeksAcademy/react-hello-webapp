import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Contacto } from "./pages/Contacto";
import { SobreNosotros } from "./pages/SobreNosotros";

export const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
        <Route path= "/" element={<Home />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="sobre-nosotros" element={<SobreNosotros />} />
      </Route>
    )
);