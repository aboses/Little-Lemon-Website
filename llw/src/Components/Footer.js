import React from "react";
import FooterLogo from "../images/Logo.svg";

const Footer = () => {
    return(
        <footer>
            <section>
                <div className="company-info">
                   <a href="/">
                     <img src={FooterLogo} alt=""/>
                   </a>
                   <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                </div>

                <div>
                    <h3>Doormat Navigation</h3>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/About">About</a></li>
                      <li><a href="/Menu">Menu</a></li>
                      <li><a href="/Reservations">Reservations</a></li>
                      <li><a href="/Orderonline">Order Online</a></li>
                      <li><a href="/Login">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contacts</h3>
                    <ul>
                        <li>Address: <br/> 123 Street, Chicago</li>
                        <li>Phone: <br/> +00 123 456 789</li>
                        <li>Email: <br/> little@lemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media</h3>
                    <ul>
                      <li><a href="/facebook">Facebook</a></li>
                      <li><a href="/instagram">Instagram</a></li>
                    </ul>
                </div>

            </section>
        </footer>
    )
}

export default Footer;