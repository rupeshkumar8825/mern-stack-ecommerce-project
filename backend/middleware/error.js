// this is the middleware for implementing the custom error handler for this purpose 
// importing the error handler first for this purpose 
const ErrorHandler = require('../utils/errorHandler')


// here err is the object of type Errorhandler which is inherited from the Error class itself 
module.exports = (err, req, res, next)=>{

    // here we are assigning the values to the error object of type ErrorHanlder for this purpose. 
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error "

    
    // wrong mondodb error handling 
    if(err.name === "CastError"){
        const message = `Resource Not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400)
    }


    // say everything went fine 
    res.status(err.statusCode).json(
        {
            success : false, 
            error : err.message
        }
    )

}


