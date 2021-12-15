const Order = require('../models/OrderModel')
const User = require('../models/UserModel')

const { sendError } = require('./commonUtils')

const mailgun = require("mailgun-js");
const DOMAIN = "sandboxa40825c4270448f5b05d7fb782e3fb53.mailgun.org";
const mg = mailgun({apiKey: "6f8fb2b82ed16b76bb767db0ccfe89e0-8ed21946-6124fec2", domain: DOMAIN});

const placeOrder = async (req, res) => {
    const { body } = req
    
    if (body.isAuthenticated) {
        const { isAuthenticated, ...orderDetails } = body
        const newOrder = new Order(orderDetails)
        
        const { orderPaymentDetails } = orderDetails
        
        const ack = `Congratulations!, Your order had been placed with RECEIPT NO: ${orderDetails.orderNumber}
        \n Mode of payment: ${orderPaymentDetails.type} 
        \n Payment status: ${orderPaymentDetails.status} 
        \n Amount paid: $${orderPaymentDetails.amount}`
        
        const data = {
            from: "Mailgun Sandbox <postmaster@sandboxa40825c4270448f5b05d7fb782e3fb53.mailgun.org>",
            to: orderDetails.userEmail,
            subject: "Order Placed",
            text: ack
        };
        try {
            await newOrder.save()
            console.log(orderPaymentDetails)
            mg.messages().send(data, function (error, body) {
                console.log(body);
            });
            res.status(201).json("Order placed successfully")
        } catch (error) {
            console.log(error)
            sendError(500, error, res)
        }
    } 
    else {
        res.status(401).json({"Error: ": "User is not authenticated"})
    }
}

module.exports = {
    placeOrder,
}