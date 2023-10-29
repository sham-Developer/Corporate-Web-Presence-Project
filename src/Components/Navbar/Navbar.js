import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
   
    return(
        <nav className="navbar">
            <span className="logo">Logo</span>
            <ul className="nav-links">
                <Link to={"/"} className="home">
                    <li className="homeSide">Home</li>
                </Link>
                <Link to={"/about"} className="about">
                    <li className="aboutSide">About</li>
                </Link>
                <Link to={"/services"} className="services">
                    <li className="servicesSide">Services</li>
                </Link>
                <Link to={"/blog"} className="blog">
                    <li className="blogSide">FAQs</li>
                </Link>
                <Link to={"/contact"} className="contact">
                    <li className="contactSide">Contact</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Navbar