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
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        }  else {
            res.send({message: "User not registered"})
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
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            });
        }
    })
    

    

        
    

    
    
})


app.listen(9003,()=>{
    console.log("BE started at port 9003 ")
})