import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app= express()
 app.use(express.json())
 app.use(express.urlencoded())
 app.use(cors())
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const User =new mongoose.model("User",userSchema)


 mongoose.connect('mongodb://localhost:27017/AmbUsers',{
useNewUrlParser:true,
useUnifiedTopology:true

 },()=>{
     console.log("DB connected")
 })//myLoginRegis=name of database

 app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message:"Login Successfull", name: user.name,flag:1})
                // localStorage.setItem('name', user.name);
                console.log("hello",user);
            
                
            } else {
                res.send({ message: "Password didn't match", flag:0});
               
            }
        }  else {
            res.send({message: "User not registered",flag:0})
        }
    });
});


app.post("/register",(req,res)=>{
    //res.send({message:"heloo new "})
    const {name,email,password}=req.body
    User.findOne({email: req.body.email}, (err, user) => {
       // res.send({message: "Use"})
        if(user){
            res.send({message: "User already registerd"})
        } 
        else {
            const user = new User({
                name:name,
                email:email,
                password:password,
                //reEnterPassword:reEnterPassword
               // res.send( { message: "S." })
            });
            user.save(error => {
                if(error) {
                    res.send(error)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            });
        }
    })
    

    

        
    

    
    
})


app.listen(9005,()=>{
    console.log("BE started at port 9005 ")
})