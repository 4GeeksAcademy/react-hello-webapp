import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout.jsx";
import injectContext from "./store.js";

const LayoutWithContext = injectContext(Layout);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LayoutWithContext />
    </React.StrictMode>
);
