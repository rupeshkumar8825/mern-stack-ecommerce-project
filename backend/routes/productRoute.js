// this is the file to define and put the routes related to product for following the design pattern 

const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController');
const router = express.Router();


// now we have to define the routes for this product for this puropse 
router.route("/products").get(getAllProducts)
router.route("/product/new").post(createProduct)
router.route("/product/:id").put(updateProduct)
router.route("/product/:id").delete(deleteProduct)
router.route("/product/:id").get(getProductDetails)
module.exports = router