const express = require('express')
const router = express.Router()

const { createUser, loginUser } = require('../controllers/userController')

// Create User
router.post('/create', createUser)

// Login
router.post('/login', loginUser)

module.exports = router