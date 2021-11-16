import React from 'react';
import "./landing.css"
import img from "../landing/images/Ambulance.png"
import Login from '../login/Login'
import Register from '../register/Register'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




const Landing = () => {
    return (
        <>

    <div class="herosection">
        <div class="fluid-container ">
            <div class="header-container">
               
                
                 <div className="hed-1">
                 <h1 class="hed-name">sarathi</h1>
               

                    <div class="nav__menu">
                        <ul class="nav__links">
                            <li class="nav__link">
                                <a class="link" href="#">Home</a>

                            </li>
                            <li class="nav__link">
                                <a class="link" href="#">About</a>

                            </li>
                            <li class="nav__link">
                                <a class="link" href="#">Services</a>
                            </li>
                        </ul>
                    </div>
                </div> 
                <div class="hed-2">
                    <div className='sar-box'>
                    <div class="conatiner-1st" >
                   
                        <h1 data-text="sehDev" class="big-heading1">Sarathi</h1>
                         
                         <div class="define" >
                            <h2 style={{color:'white'}}>
                            
                                Connecting Ambulances <br/> Saving lives </h2>
                                <Router>
                                <div class="box-1">
                                <Link to="/register">   <button class="btn-1">Register</button></Link>
                  

                               

                                <Link to="/login"> <button class="btn-1">Login</button> </Link>

                                </div>
                                <Route path="/register" component={Register} />
                                <Route path="/login" component={Login} />
                                
                                </Router>
                           
                        </div>
                        
                       
                      
                    </div>
                    <div className='rapid-book'>
                    <button class="btn-1 rapid color-2">RAPID BOOK</button>
                    </div>
                    
                      
                    </div>
             
                    <div class="mid-container">
                        <div class="mid-box-container">
                            <ul class="card-1">
                                
                                <li  class="card-sec">
                                    <i class="fas fa-ambulance" style={{fontSize:50, color:'aliceblue'}}></i>
                                    <h3>Find Ambulances near you</h3>
                                    <h5 class="des-text">Helps to find the ambulances near you on a single click</h5>

                               </li>
                               <li  class="card-sec">
                              
                              
                                <i class="fas fa-clock" style={{fontSize:50, color:'aliceblue'}}></i>
                                <h3>Instant booking </h3>
                                <h5 class="des-text">Now book ambulances as fast as possible</h5>
                                {/* We connect you directly with ambulance driver */}
                            </li>
                               <li  class="card-sec">
                               {/* <i class="fas fa-money-bill-wave"></i> */}
                                <i class="fas fas fa-route" style={{fontSize:50, color:'aliceblue'}}></i>
                                  <h3>Easy Tracking</h3>
                                <h5 class="des-text">We provide you the shortest route to your destination</h5>

                               </li>
                               <li  class="card-sec">
                             
                                <i class="fas fa-money-bill-wave" style={{fontSize:50, color:'aliceblue'}}></i>
                                  <h3>Fare Pricing</h3>
                                <h5 class="des-text">Assured fare pricing based on our cost reducing alogorithm</h5>
                               </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     <div class="herosection-1">
          <h1 class="big-heading2">Why do we exist?</h1>
         
         <div className="explain" >
         <h2 class="head-content">We are upgrading and digitalizing the traditional channels that were used to seek help. Our technology platforms were built to connect the patients and the ambulances directly  with each other in the time of need. We strive to provide high-quality, efective consultations, assisting the every day superheroes to reach the patients faster with the help of an easy and simple format.
          
        </h2>
        <img className='ambulance' src={img}/>
         </div>
         
        <hr class="line-1"/>




     </div>
    <div class="features-section" >
        <h1 class="feature-head" >Our Services...</h1>
        <div class="feature feature-1">
        

            <img class="phone-img" src="./images/smartphone-2.png" />
            <div class="phone-text">
                <h2 class="phone-text-1">Very Convenient</h2>
                <p class="phone-text-2">One touch access to all the <br/> doctors...</p>
            </div>

        </div>
        <div class="feature feature-1">
            <img class="phone-img" src="./images/Book.png"/>
            <div class="phone-text">
                <h2 class="phone-text-1">Appointment</h2>
                <p class="phone-text-2">Shedule the Appointment at your own convenience.</p>
            </div>
        </div>
        <div class="feature feature-1">
            <img class="phone-img" src="./images/safe.png"/ >
            <div class="phone-text">
                <h2 class="phone-text-1">Transparent pricing</h2>
                <p class="phone-text-2">Convenient mechanism, with online and cash payment mode.</p>
            </div>
        </div>
        <div class="feature feature-1">
            <img class="phone-img contact-img" src="./images/contact-1.png"/ >
            <div class="phone-text">
                <h2 class="phone-text-1">Emergency Contact</h2>
                <p class="phone-text-2">In case of any Emergency expert advice team will be available</p>
            </div>
        </div>
        <div class="feature feature-1">
            <img class="phone-img" src="./images/idea.png"/ >
            <div class="phone-text">
                <h2 class="phone-text-1">Tips & Information</h2>
                <p class="phone-text-2">All the tips and health related information in case of any emergency situation</p>
            </div>
        </div>
        <div class="feature feature-1">
            <img class="phone-img" src="./images/communication-2.png" />
            <div class="phone-text">
                <h2 class="phone-text-1">Easy communication</h2>
                <p class="phone-text-2">Seamless communication with doctors.</p>
            </div>
        </div>
    </div>
 
    <div class="footer">


    <ul class="footer-list"> 

        <li class="footer-li-list" >For patients
        </li>
        <li class="footer-li-list">Search for doctors
        </li>
        <li class="footer-li-list">Search for clinics
        </li>
        <li class="footer-li-list">Book Diagnostic Tests
        </li>
        <li class="footer-li-list">Book Full Body Checkups
        </li>

    </ul> 
    <ul class="footer-list-1"> 

        <li class="footer-li-list-1 ">For doctors
        </li>
        <li class="footer-li-list-1">Rating Profile
        </li>
        
        

    </ul> 
 <ul class="footer-list-2">

    <li class="footer-li-list-2" >Developers
    </li>
    <li class="footer-li-list-2">Privacy Policy
    </li>

    <li class="footer-li-list-2">Terms & Conditions
    </li>


 </ul>
<ul class="icon-container">

        <i class="fab fa-facebook"></i>


        <i class="fab fa-instagram"></i>


        <i class="fab fa-pinterest"></i>
       

</ul>


    </div>



     
 

 
        </>
    )
}

export default Landing
