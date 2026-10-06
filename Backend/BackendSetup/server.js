//BACKEND RULES TO WRITE CODE

//Step 1 : Import the required modules and dependencies at the top of the file. This includes Express, body-parser, and any other necessary libraries.
//Whatever modules you need for your backend setup, make sure to import them here.

//How to import Modules in node.js
//use the require() function to import modules in Node.js. For example, to import the Express module, you would write:
//syntax-  require('ModuleName');

const express = require('express');
//Modules will have its own inbuilt functions and methods that you can use in your code. For example, the Express module has methods like express(), app.get(), app.post(), etc. You can refer to the documentation of each module to understand its functionalities and how to use them effectively in your backend setup.

//Step 2 : Create an instance of the Express application by calling the express() function. This instance will be used to define routes, middleware, and other configurations for your backend server.
const app = express();

//help us to build API

//MiddleWare - Security Layers

//STEP 3 : building API Endpoints/Routes/URL - Communication between Frontend and Backend

//syntax : app.methodName('path/address', function(req, res) { -task-});

//1. First Address using get method : get the data from the backend server to the frontend server
app.get('/', function(req, res) {
    res.send('good evening : backend API running.');
});

//2.Another Address
app.get('/login', function(req, res) {
    res.send('good evening login');
});

//3.
app.get('/register', function(req, res) {
    res.send('good evening register');
})



//step 4 : START THE SERVER By using app.listen() 

//syntax : app.;isten(portNumber, function(){})

//portNumber - It is a number that represents the communication endpoint for your backend server - adress pf internet
//example : 3000, 5000, 8000, 8080, etc. You can choose any available port number for your backend server to listen on.

app.listen(3000, function() {
    console.log('Backend server is running on port http://localhost:3000')
})
