console.log("Hi this is server side of the ecommerce application for learning purpose")
const app = require("./app")
const dotenv = require('dotenv')
const connectDatabase = require("./config/database")
// const connectDatabase = 
// here we are telling to use this env to be able to fetch the value of the PORT 
// do note that this PORT value will be not pushed to the repo as env files are kind of hidden 
dotenv.config({path : "backend/config/config.env"})
// calling the function to connect to the database 
connectDatabase()

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server  is running or working on http://localhost/${process.env.PORT}`)
})


// handing the unhandled promise rejection 
process.on("unhandledRejection", (err)=>{
    console.log(`Error ${err}`);

    console.log("Shutting down the server due to unhandled promise rejection");

    // here we are closing the server 
    server.close(()=>{
        process.exit(1)
    })
})