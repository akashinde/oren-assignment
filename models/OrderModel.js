const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    userEmail: { type: String, require: true },
    userAddress: { type: String, require: true },
    orderNumber: { type: String, require: true },
    orderedProducts: [{}],
    orderPaymentDetails: { 
        type: {type: String, require: true},
        status: {type: String, require: true},
        amount: {type: Number, require: true}
     },
    createdAt: { type: Date, default: new Date() }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order