const User = require('../models/UserModel')

const { sendError } = require('./commonUtils')

const createUser = async (req, res) => {
    // Password of the user will be hashed from client side
    const { body } = req
    const newUser = new User(body)
    try {
        await newUser.save()
        res.status(201).json("User created successfully")
    } catch (error) {
        console.log(error)
        sendError(500, error, res)
    }
}


const loginUser = async (req, res) => {
    const { body: { email, password} } = req
    try {
        const user = await User.findOne({email})
        if ( user.password === password ) {
            res.status(200).json({"isAuthenticated": true})
        }
        else {
            res.status(401).json({"isAuthenticated": false})
        }
    } catch (error) {
        sendError(500, error, res)
    }
}

module.exports = {
    createUser,
    loginUser
}