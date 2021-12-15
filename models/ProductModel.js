const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName: { type: String, require: true },
    productPrice: { type: Number, require: true },
    createdAt: { type: Date, default: new Date() }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product