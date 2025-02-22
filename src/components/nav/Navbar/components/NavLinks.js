import React from "react";
import "../Navbar.css";

const NavLinks = () => {
    return (
        <nav className="nav-links">
            <a href="/#">Dashboard</a>
            <a href="/#" className="active">Organización</a>
            <a href="/#">Modelos</a>
            <a href="/#">Seguimiento</a>
        </nav>
    );
};

export default NavLinks;