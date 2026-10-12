// Step 1: import required modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Step 2: create application using express()
const app = express();

// middleware - security layer
app.use(express.json());
app.use(cors());

// Phase 1: backend - database connection
mongoose.connect('mongodb://localhost:27017/AugustStudent')
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log('err', err));

// B. Schema - blueprint of the data you want to store
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
});

// C. Model (Collection in MongoDB)
const User = mongoose.model('user', UserSchema);

// phase 2: frontend-backend - API (carry data)
app.get('/', (req, res) => {
  res.send('Backend Running');
});

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'all fields must be completed' });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.json({ message: 'user already exists' });
  }


  //3. Hash the password
  const hashPassword = await bcrypt.hash(password, 10);

  //save the data in MongoDB collection - user(model)

 const newUser = User({
    username,
    email,
    password: hashPassword,
  })

  await newUser.save() //store the data in collection

  res.json({ 
    message: 'user registered successfully' });
});

app.post('/login', async (req, res) => {

  const { email, password } = req.body;


  //1.Find User
   const user = await User.findOne({email});

   if(!user){
    return res.json({
        message : 'user not found - register first'
    })
   }

   //compare password
   const valid = await bcrypt.compare(password,user.password)  //boolean output

   if(valid){
    res.json({
        message:'login successfull'
    })
   }else{
    res.json({
        message:'invalid password'
    })
   }
})

app.listen(3000,()=>{
    console.log("server running http://localhost:3000")
})