const express = require('express')
const router = express.Router()

const { createProduct, getAllProducts } = require('../controllers/productController')

// Create Products
router.post('/create', createProduct)

// Get all products
router.post('/get-all', getAllProducts)

module.exports = router