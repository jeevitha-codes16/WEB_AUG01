 //Step 1 : import using required ('methodeName')
 const express = require('express') //api building
const express = require('cors')  //share resources between different origins
const mongoose = require('mongoose') //backend - database connection
const bcrypt = require('bcrypt')  //hash the senstive date like - password


//Step 2 : create application using express()
const app = express()

//middleware - security layer
app.use(express.json())
app.use(cors())

//Phase 1 : backend - database connection

//A.Connect - Local DB - mongodb:localhost:27017/Database_Name
  mongoose.connect('mongodb://localhost:27017/AugustStudent')

  .then(() =>console.log('mongodb connected')) //confirm message

  .catch((err) => console.log(' err')) //error message



  //B.Schema- BluePrint of he data which you want tos store
      const UserSchema = new mongoose.Schema({
            //json - object - key: value pair
            name: String,
            email: String{
                type: String,
                unique: true //unique email - no duplicate email
            },
            password: String
        })



  //C. Model (Collection in mongoDB)
 const User = mongoose.model('user',UserSchema)





 //phase 2: Frontend-Backend - API(carry data)

 app.get('/'(Request,res)=>{
    res.send("Backend Running")

 })
app.post('/register', async(req,res)=>{
         
     const{email,password}     =req.body;

})

app.post('login',async(req,res)=>{
        
          
         const{email,password}  =req.body


})