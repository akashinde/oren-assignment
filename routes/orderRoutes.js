const express = require('express')
const router = express.Router()

const { placeOrder } = require('../controllers/orderController')
// Place order for given products
router.post('/place-order', placeOrder)

module.exports = router