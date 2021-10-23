import React,{useState} from "react"
 import "./Register.css"
 import axios from "axios"
 import { useHistory } from "react-router"

 const Register=()=>{
const [user,setUser]=useState({
name:"",
email:"",
password:"",
reEnterPassword:"",


})
const history =useHistory()
const handleChange= e=>{ 
    const{name,value}=e.target
    console.log(name,value)
    setUser({
       ...user,
       [name]:value


    })
}
const register = ()=>{
    const {name,email,password,reEnterPassword}=user
    {/* checking if name yani ki kuch enter bhi kiya hai ki nai*/}
    if(name && email && (password==reEnterPassword)){
        //alert("posted")
        axios.post("http://localhost:9005/register",user)
        .then(res=> {alert (res.data.message)
          history.push("/login")
        
        })
        
    }
    else{
        alert("invalid input")
    }
   
}

     return (
         <div class="kar">
             <div className="register">
             <button  class="close-btn fas fa-times" title="close" onClick={ ()=> history.push("/")}></button>


             <h1>Register</h1>
             <input type="text" name ="name"  value={user.name} placeholder=" Your Name" onChange={handleChange}></input>
        

             <input type="text" name ="email"  value={user.email} placeholder=" Your Email " onChange={handleChange}></input>
             <input type="password" name="password" value={user.password}  placeholder=" Your Password" onChange={handleChange}></input>
             <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            
            <div className="button" onClick={register}>Register</div>
            <div> or </div>
            <div className="button" onClick={ ()=>history.push("/login")}>Login</div>
         
         
            </div>
         </div>
     )
 }
 export default Register