import React from 'react';
import "./home.css"
import Navbar from '../navbar/Navbar';
import pulse_1 from "../Home/images/pulse.gif";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div class="body-container">
            <img src={pulse_1} class="gif" />
                <div class="input-box">
                    <h1 class="book-heading-1">Book Here</h1>
                    <div class="input-box-1">
                        <input class="input-1" placeholder="Patients adress" type="text" />
                        <input class="input-1" placeholder="Hospitals adress" type="text" />
                    </div>
                    <button class="book-btn-1">Book Now</button>
                </div>
            </div>
            <div class="footer">

            </div>
        </div>
    )
}

export default Home
