import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import { Layout } from "./pages/Layout";
import Home  from "./pages/Home";
import ContactList from "./pages/Contacts/ContactList"
import ViewContacts from "./pages/Contacts/ViewContacts";
import AddContact from "./pages/Contacts/AddContact";
import EditContact from "./pages/Contacts/EditContact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>

     
        <Route path="/" element={<Home />} />
        <Route path="/ViewContacts/:Id" element={<ViewContacts />} />
        <Route path="/contact_list" element={<ContactList/>} />
        <Route path="/add_contact" element={<AddContact/>} />
        <Route path="/edit_contact" element={<EditContact/>} />

      </Route>
  )
);

export default router;
