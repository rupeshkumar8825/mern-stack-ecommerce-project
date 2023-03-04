// this is function file where we will implement all the api functions for this purpose 
const Product = require("../models/productModel")

// we have to define the function to create the product for this purpose 
// we have to use the async and await for this purpose
exports.createProduct = async (req, res, next) => {
    console.log("hi i am creating the product for this purpose");
    const product = await Product.create(req.body)

    // say everything went fine 
    res.status(201).json({
        success : true, 
        product 
    })

}

// this is what we follow the design pattern to not to over write the code in a single file 
exports.getAllProducts = (req, res) =>{
    // say everything went fine 
    res.status(200).json({message : "Route is working fine"})
}