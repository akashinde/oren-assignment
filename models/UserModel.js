const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    address: {type: String, require: true},
    createdAt: {type: Date, default: new Date()}
})

const User = mongoose.model('User', userSchema)

module.exports = User