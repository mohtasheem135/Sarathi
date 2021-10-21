import React from "react"
import "./Homepage.css"
// import hBar from './component/homepage/hBar'


 const Homepage=({setLoginUser})=>{

     return (
         <>
         <div className="head">
         {/* <img className='bg' src= {require('../images/img-2.jpg').default}  alt='Back'/>  */}
         <div className="component">
             <h1>Home</h1>
         </div>
         
         <div className="homepage">
             
             <h1>Homepage</h1>
             <div className="button" onClick={()=>setLoginUser ()}>Logout</div>
         </div>
         </div>
         
    
        
         </>
     )
 }
 export default Homepage