import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Personajes } from "./views/personajes";
import { Planeta } from "./views/planeta";
import { Vehiculos } from "./views/vehiculos";
import { AppProvider } from "./store/appContext";
import { Footer } from "./component/footer";
import "./component/styles/index.css";

const Layout = () => {
  useEffect(() => {
    // Aquí puedes realizar cualquier lógica o efectos que necesites al cargar el componente
    // Si anteriormente estabas utilizando el contexto para obtener el estado global,
    // puedes considerar otras opciones, como utilizar React Redux u otros patrones de manejo de estado.
  }, []);

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <AppProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/personajes/:theid" element={<Personajes />} />
              <Route path="/planeta/:theid" element={<Planeta />} />
              <Route path="/vehiculos/:theid" element={<Vehiculos />} />
            </Routes>
          </AppProvider>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
