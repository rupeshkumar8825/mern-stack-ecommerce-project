// this is function file where we will implement all the api functions for this purpose 
// this is what we follow the design pattern to not to over write the code in a single file 
exports.getAllProducts = (req, res) =>{
    // say everything went fine 
    res.status(200).json({message : "Route is working fine"})
}