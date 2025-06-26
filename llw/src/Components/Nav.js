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

            <ul className={`nav-links ${menuopen ?  "visible":""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Menu">Menu</a></li>
                <li><a href="/Reservations">Reservations</a></li>
                <li><a href="/OrderOnline">Order Online</a></li>
                <li><a href="/Login">Login</a></li>

            </ul>
        </nav>

    )
}
export default Nav;