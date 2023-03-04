// this is the file to define and put the routes related to product for following the design pattern 

const express = require('express');
const { getAllProducts } = require('../controllers/productController');
const router = express.Router();


// now we have to define the routes for this product for this puropse 
router.route("/").get(getAllProducts)


module.exports = router