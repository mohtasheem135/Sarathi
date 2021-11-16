import React ,{useState} from "react"
import  "../login/Login.css"
import axios from "axios"
import { useHistory } from "react-router"
import Landing from "../landing/Landing"
import Cookies from "universal-cookie/es6"

 const Login =({setLoginUser})=>{
     
     
   
    const cookies = new Cookies();
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
        
    //  componenDidMount  ()  {
    //    const url = 'http://localhost:9005/login';
    //    const response = await fetch(url);
    //    const data = await response.json();
    //    console.log(data);
    //     }
        const login = () =>{
            axios.post("http://localhost:9005/login",user )
            .then(res => {
           
             alert(res.data.message);
            // alert(res.data.name);
           
            if(res.data.flag === 1){
               //   const name = res.data.user.name;
                localStorage.setItem('name',res.data.name);
                console.log(res.data.name);
               
                // cookies.set(user, { path: '/' });
                // console.log(cookies.get(user));
                history.push("/map");
                //  setLoginUser(res.data.user)
                window.location.reload();
            }
          
          
            })
        }
       const store =(e) =>{


        }
     return (
         <>
         <div className="kar">
 
         <div className="login">
         <button  class="close-btn fas fa-times" title="close" style={{color:'red'}} onClick={ ()=> history.push("/")}></button>
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