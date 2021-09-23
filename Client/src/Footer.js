
import { NavLink } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="bg-dark text-center py-5">
            <div className="container px-5">
                <div className="text-white-50 small">
                    <div className="mb-2">&copy; Your Website 2021. All Rights Reserved.</div>
                    <NavLink className="text-decoration-none" to="/">Home</NavLink>
                    <span className="mx-1">&middot;</span>
                    <NavLink className="text-decoration-none" to="/service">Service</NavLink>
                    <span className="mx-1">&middot;</span>
                    <NavLink className="text-decoration-none" to="/about">About</NavLink>
                </div>
            </div>
        </footer>
    )

}