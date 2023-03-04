console.log("Hi this is server side of the ecommerce application for learning purpose")
const app = require("./app")
const dotenv = require('dotenv')

// here we are telling to use this env to be able to fetch the value of the PORT 
// do note that this PORT value will be not pushed to the repo as env files are kind of hidden 
dotenv.config({path : "backend/config/config.env"})



app.listen(process.env.PORT, ()=>{
    console.log(`Server  is running or working on http://localhost/${process.env.PORT}`)
})