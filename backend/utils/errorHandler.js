// this is custom made error handler for handling the error in more efficient way 
// this we are doing for learning purpose 

// the following is the ErrorHandler class which is being inherited from Error class 
// which is already implemented for this purpose 

class ErrorHandler extends Error{
    // here we are defining the constructor for this class and we are passing the message and statusCode as arguments 
    constructor(message, statusCode)
    {
        // the message we are passing to the constructor of the  parent class which is Error
        super(message);
        // setting the statusCode as shown below 
        this.statusCode = statusCode
        
        // here we are calling one method that has been inherited from Error class 
        // this takes the object of the current class and the constructor of the current class for this purpose 
        Error.captureStackTrace(this, this.constructor)
    }
}


// now we will have to export this handler for this purpose 
module.exports = ErrorHandler