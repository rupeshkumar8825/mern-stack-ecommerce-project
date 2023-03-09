// this is function file where we will implement all the api functions for this purpose 
const Product = require("../models/productModel")



// we have to define the function to create the product for this purpose 
// we have to use the async and await for this purpose
// this will be admin route to create the new product for this purpose 
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
exports.getAllProducts = async (req, res, next) =>{
    const products = await Product.find()
    // say everything went fine 
    res.status(200).json({message : "Route is working fine", products: products})
}





// function to update the product for this purpose 
// this will be admin route 
exports.updateProduct = async(req, res, next) => {
    console.log("The user is updating the product details for this purpose \n");

    const currentId = req.params.id;
    let currentProduct = await Product.findById(currentId);

    // if product is not found 
    if(!currentProduct)
    {
        return res.status(500).json({
            success : false,
            message : "Product not found for this purpose"
        })
    }

    // otherwise we have to update this product 
    currentProduct = await Product.findByIdAndUpdate(currentId, req.body, {
        new : true, 
        runValidators : true, 
        useFindAndModify : false
    });


    

    // say everything went fine 
    res.status(200).json({message : "Successfully Updated the product for this purpose", product : currentProduct});

}




// route to delete the product --admin 
exports.deleteProduct = async(req, res, next) => {
    const currentId = req.params.id  
    const currentProduct = Product.findById(currentId);

    if(!currentProduct)
    {
        res.status(500).json({
            success : false,
            message : "Product Not Found"
        })
    }

    // otherwise we have to do the following for this purpose 
    await Product.findByIdAndDelete(currentId);

    // say everything went fine 
    res.status(200).json({
        success : true, 
        message : "Product Deleted Successfully"
    })
}

// finally adding some comments for learning purpose to demonstrate the multiple branch 
// how to handle the multiple  branch in the git locally for learning purpose and for this purpose 
