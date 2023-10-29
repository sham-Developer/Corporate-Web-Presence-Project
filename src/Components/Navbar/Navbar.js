import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            <span className="logo">Logo</span>
            <ul className="nav-links">
                <Link to={"/"} className="home">
                    <li>Home</li>
                </Link>
                <Link to={"/about"} className="about">
                    <li>About</li>
                </Link>
                <Link to={"/services"} className="services">
                    <li>Services</li>
                </Link>
                <Link to={"/blog"} className="blog">
                    <li>FAQs</li>
                </Link>
                <Link to={"/contact"} className="contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Navbar