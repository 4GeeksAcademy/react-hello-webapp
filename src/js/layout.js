import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

// importing views
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Home } from "./views/home";
import AddContact from "./views/AddContact";
import EditContact from "./views/EditContact";

// importing contect
import injectContext from "./store/appContext";

//importing components
import { Navbar } from "./component/navbar";

//creating Layoung component

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="/addContact" element={<AddContact />} />
            <Route path="/editContact/:theid" element={<EditContact />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
