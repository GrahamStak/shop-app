const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;

const stripe = require("stripe")(keySecret);

const db = require('APP/db')

module.exports = require('express').Router()
  .post('/',
    (req, res, next) => {
      const amount  = req.body.amount
      const item = {
        name:req.body.name,
        description:req.body.description,
        price:req.body.amount,
      }
      stripe.customers.create({
        email: req.body.email,
       source: req.body.source
     })
     .then(customer =>
       stripe.charges.create({
         amount,
         description: "Sample Charge",
            currency: "usd",
            customer: customer.id
       }))
     .then(charge => res.status(201).json(charge))
    })