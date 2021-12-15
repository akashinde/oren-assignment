// Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const { CONNECTION_URL } = require('./configs/mongo')

// Routes
const userRoutes = require('./routes/userRoutes.js')
const productRoutes  = require('./routes/productRoutes.js')
const orderRoutes  = require('./routes/orderRoutes.js')

// Initialize express
const app = express()

// Middleware's
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

// Registering routes
app.use('/user', userRoutes)
app.use('/product', productRoutes)
app.use('/order', orderRoutes)


const PORT = process.env.PORT || 5000

// Connecting to database then establishing connection
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`))
  })
  .catch((err) => console.log(err.message))