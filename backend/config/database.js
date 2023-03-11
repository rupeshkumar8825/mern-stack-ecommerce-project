// here we will write the code to connect with the mongoDB database for this purpose 
// this we are doing to avoid long lines of codes in the main server file so 
// this will allow us to maintain the code and keep the big code clean for this purpose 
// hence we will be able to scale it as well for this purpose 
// and for the peers it will be easy to review the code for this purpose 
const mongoose = require('mongoose')

// since we have to export this connection so that we can call from the main server 
// hence we have to keep this connect function inside the another function for this pourpose 
const connectDatabase = ()=>{
    // calling the function to connect the database that is mongoDB for this purpose 
    mongoose.connect(process.env.DB_URI, 
    {
        useNewUrlParser : true, useUnifiedTopology : true
    }).then((data) => {
        console.log(`MongoDB connected with the server with ${data.connection.host}`)
    })
    // no need of catch block here because we already have hanlded the unhandled promise rejection in server.js
    // .catch((error) => {
    //     console.log(error)
    // })
}

// say everything went fine 
module.exports = connectDatabase;