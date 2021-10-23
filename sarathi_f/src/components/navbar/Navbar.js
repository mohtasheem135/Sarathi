import React from 'react';
import "./navbar.css";
import logo_1 from "./images/logo-1.png";
import user_1 from "./images/user-1.png"

const Navbar = () => {
    return (
        <div>
            <div className="navbar-1">
                <nav className="nav-1">
                    <a className="img-link" href="#"> <img className="img-1" src={logo_1} /></a>
                    <h1 className="heading-2">Sarathi</h1>
                    <ul className="nav-list">
                        <li className="nav-text"><a className="nav-link-text" href="#">Home</a></li>
                        <li className="nav-text"><a className="nav-link-text" href="#">Services</a></li>
                        <li className="nav-text"><a className="nav-link-text" href="#">About</a></li>
                        <li className="nav-text"><a className="nav-link-text" href="#">Contact us</a></li>
                        <li className="nav-text"><a className="nav-link-text" href="#">Join us</a></li>
                    </ul>
                    <div className="user-container">
                    <ul className="profile-list">
                            <li className="profile-text">Azad</li>
                            <li className="profile-text">+91 63XXXXXX91</li>
                        </ul>
                        <a className="user-link" href="#"><img className="user-1" src={user_1} alt="user" /></a>
                        <div className="drop-container">
                    <ul className="drop-list">
                        <li className="drop-text">View Profile</li>
                        <li className="drop-text">View Profile</li>
                        <li className="drop-text">View Profile</li>
                        <li className="drop-text">View Profile</li>
                    </ul>
                </div>
                    </div>
                </nav>
                
            </div>
            
        </div>
    )
}

export default Navbar
