import { Outlet } from "react-router-dom/dist"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"


export const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}