import React ,{useState} from "react"
import  "../login/Login.css"
import axios from "axios"
import { useHistory } from "react-router"
import Landing from "../landing/Landing"

 const Login=({setLoginUser})=>{
     
     
   
     
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
        
        
        })
        const history= useHistory()
        const handleChange= e=>{
            const{name,value}=e.target
            console.log(name,value)
            setUser({...user,[name]:value})
        }
        
        const login = () =>{
            axios.post("http://localhost:9005/login",user )
            .then(res => {
           console.log(res)
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/home");
            window.location.reload();
            })
          
        
        }
     return (
         <>
         <div className="kar">
 
         <div className="login">
         <button  class="close-btn fas fa-times" title="close" onClick={ ()=> history.push("/")}></button>
            <h1>Login</h1>
         <input  class="ch" type="checkbox" id="show"></input>
           

            <input type="text" name ="email"  value={user.email} placeholder=" Enter Email" onChange={handleChange}></input>
            
            <input type="text" name ="password"  value={user.password} placeholder=" Your Password" onChange={handleChange}></input>

            <div className="button" onClick={login}>Login</div>
            <div> or </div>
            <div className="button" onClick = { ()=> history.push("/register")}>Register</div>
         
         
         </div>
         </div>
          
         </>
        
     )
 }
 export default Login