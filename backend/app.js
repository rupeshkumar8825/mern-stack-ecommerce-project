// this is the file to use the routes and define the endpoint for first point for great file structure 
console.log("hi this is express app file ")
// const app = require('./server')
// import app from "./server"
const express = require('express');
const app = express();

const product = require("./routes/productRoute.js")


app.use(express.json())
// here now we will import the routes that we have defined 
// so here first if the route matches the following and if then it will be redirected to product based on the route below and also it will go to that particular route and finally it will call the function 
// do remember that this was the same thing that was being followed in django 
app.use("/api/v1", product)

// say everything went fine 
module.exports =  app;


// SAY EVERYTHING WENT FINE 