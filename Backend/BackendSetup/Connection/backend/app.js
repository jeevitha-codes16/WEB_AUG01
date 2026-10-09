const express = require('express');
const cors = require('cors');
const app = express();

// Middleware - security

app.use(express.json());
app.use(cors()); 

//enable the cors so we can share resources between different origins

//api - 
app.post('/login', (req, res) => {

    //data from frontend - req.body

    const {name,email}= req.body

    console.log(name)

    //simple validation

    if(name&&email){
        res.json({message: `welcome ${name} to my website`})
    }

})


app.listen(3000, () => {
console.log('server is running  http://localhost:3000')
})





