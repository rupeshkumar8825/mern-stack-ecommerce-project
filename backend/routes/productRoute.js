// this is the file to define and put the routes related to product for following the design pattern 

const express = require('express');
const { getAllProducts, createProduct, updateProduct } = require('../controllers/productController');
const router = express.Router();


// now we have to define the routes for this product for this puropse 
router.route("/products").get(getAllProducts)
router.route("/product/new").post(createProduct)
router.route("/product/:id").put(updateProduct)

module.exports = router