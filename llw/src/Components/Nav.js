import React from "react";
import Logo from "../images/Logo.svg";

const Nav = () => {


    const [menuopen, setMenuOpen] = React.useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuopen);
    }

    return (
        <nav className={`navbar ${menuopen ? "open" : ""}`}>
            <a href="/">
             <img src={Logo} alt="Logo"/>
            </a>

            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-links ${menuopen ? "open" : "visible"}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>

            </ul>
        </nav>

    )
}
export default Nav;