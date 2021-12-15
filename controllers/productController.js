const Product = require('../models/ProductModel')

const { sendError } = require('./commonUtils')

const createProduct = async (req, res) => {
    const { body } = req
    const newProduct = new Product(body)
    try {
        await newProduct.save()
        res.status(201).json("Product added successfully")
    } catch (error) {
        console.log(error)
        sendError(500, error, res)
    }
}


const getAllProducts = async (req, res) => {
    const { isAuthenticated } = req.body
    
    if (isAuthenticated) {
        try {
            const allProducts = await Product.find()
            res.status(200).json(allProducts)
        } catch (error) {
            sendError(500, error, res)
        }
    } else {
        res.status(401).json({"Error: ": "User is not authenticated"})
    }
}

module.exports = {
    createProduct,
    getAllProducts
}