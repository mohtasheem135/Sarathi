import React from 'react';
import "./landing.css"
import img from "../landing/images/Ambulance.png"

const Landing = () => {
    return (
        <div className="main-body">
            <div class="menu-container">
                <nav class="head-nav">
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </nav>

            </div>
            <div className="img">
                <img src={img}/>
            </div>
            <span className="text text-1">Sarathi</span>
            <span className="text text-2">Connecting Ambulances Saving Lives</span>
            <button className="rapid-btn">Rapid Booking</button>

            <nav class="foot-nav">
                    <ul>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Log In</a></li>
                    </ul>
                </nav>
        </div>
    )
}

export default Landing
