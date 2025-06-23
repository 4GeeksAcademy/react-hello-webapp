import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout.jsx";
import { StoreProvider } from "./store.jsx";  // Importa StoreProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <Layout />
    </StoreProvider>
  </React.StrictMode>
);

