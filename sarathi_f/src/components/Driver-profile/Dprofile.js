import React from 'react'
import '../Driver-profile/Dprofile.css'
import driver from '../Driver-profile/profile.png'
import Navbar from '../navbar/Navbar'
import { DataNavigation } from 'react-data-navigation';
export default function Dprofile() {




  
    return (
        <>
        <Navbar/>
        <h1>{DataNavigation.getData('driverName')}</h1>
      
      <div className="wrapper">
      
           < div className='header'>


                 <div className='logo'>
                    <img src={driver} alt='logo'/>
                 </div>
                <div className='info'>
                  <label>
               
                    <h2 className='topper'>SUPER SARTHI</h2>
                    <div className='name-rate'>
                             <h3>Joginger Sharma</h3>
                                 <div className='rate'>
                                 
                                  <i class="fas fa-star" ></i>
                                  <i class="fas fa-star" ></i>
                                  <i class="fas fa-star" ></i>
                                  <i class="fas fa-star" ></i>
                                  
                                 </div>
                    </div>
                   
                    
                  </label> 
                  <div className='mytabs'>
                    <input type="radio" id="about" name="mytabs" checked="checked"></input>
                     
                       <label className='label-1' for='about'>ABOUT</label>
                       <div className='tab'>
                         <div className="title">
                            <ul className='detail'>
                               <li className='detail-row'>User ID</li>
                               <li className='detail-row'>474940444</li> 
                             </ul>
                             <ul className='detail'>
                               <li className='detail-row'>Name</li>
                               <li className='detail-row'>{DataNavigation.getData('driverName')}</li> 
                             </ul>
                             <ul className='detail'>
                               <li  className='detail-row'>Email</li>
                               <li className='detail-row'>{DataNavigation.getData('driverName')}xxxx@gmail.com</li> 
                             </ul>
                             
                             <ul className='detail'>
                               <li className='detail-row'>Phone</li>
                               <li className='detail-row'>+91 3293222221</li> 
                             </ul>
                             <ul className='detail'>
                               <li className='detail-row'> Travelled</li>
                               <li className='detail-row'>3000 KM</li> 
                     </ul>
                         </div>
 
                   </div>
                   <input type="radio" id="timeline" name="mytabs" ></input>
                     
                     <label className='label-1' for='timeline'>TIMELINE</label>
                      <div className='tab'>
                         <div className='titile'>
  
                    
                    
                      <ul className='detail-center'>
                        <h3>Last few trips...</h3>
                     
     

 
                               <li className='travel-hover color-1'>KOLKATA ---  PATNA</li> 
                               <li className='travel-hover color-1'>KOLKATA ---  PATNA</li> 
                               <li className='travel-hover color-1'>DELHI ---  KANPUR</li> 
                               <li className='travel-hover color-1'>KANPUR ---  RANCHI</li> 

                       </ul>
                       <div class="buttons">

                      </div>
                     

                     </div>
                     
                  </div>

                  </div>
                  
                </div>

              


           </div>
          
                





      </div>

        </>
    )
}
