// this is the file to define the model of the product one for this purpose 
// we will have to import the mongoose first 
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name : {
        type : String, 
        required : [true, "Please enter product name"], 
        trim : true,
    },
    description :{
        type : String, 
        required : [true, "Please Enter the Product description"],
    },
    price : {
        type : Number, 
        require : [true, "Please Enter Product Price"],
        maxLength : [8, "Price cannot exceed 8 characters"],
    },
    ratings : {
        type : Number,
        default : 0,
    },
    images : [
        {
            public_id : {
                type : String,
                required : true,
            },
            url : {
                type : String,
                required : true
            },
        },
    ],
    category : {
        type : String, 
        required : [true, "Please enter the category of the product"],
    },
    stock : {
        type : Number, 
        required : [true, "Please enter the stock of the products"],
        maxLength : [4, "Stock cannot exceed 4 characters"], 
        default : 1,
    },
    numOfReviews : {
        type : Number,
        default : 0,
    },
    reviews : [
        {
            name : {
                type : String, 
                required : true, 
            }, 
            rating : {
                type : Number, 
                required : true
            }, 
            comment : {
                type : String, 
                required : true
            }
        }
    ],
    createdAt:{
        type : Date,
        default : Date.now()
    }

})


// say everything went fine 
// we have to export this model for this purpose 
module.exports = mongoose.model("Product", productSchema)