import React from 'react';
import "./navbar.css";
import logo_1 from "../navbar/images/logo-1.png"

const Navbar = () => {
    return (
        <div>
            <div class="navbar-1">
                <nav class="nav-1">
                    <a class="img-link" href="#"> <img class="img-1" src={logo_1} /></a>
                    <h1 class="heading-2">Sarathi</h1>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Join us</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
