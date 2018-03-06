'use strict'
const db = require('APP/db')
const {Item} = db
// const key = require('../keys')
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
const stripe = require("stripe")(keySecret);
const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    Item.findAll({})
      .then(items => {
        return res.status(200).json(items)})
      .catch(next)
  })
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
     .then(charge => Item.create(item))
     .then(created => res.status(201).json(created))
    })
  .get('/:id',
    (req, res, next) => {
      Item.findOne({where: {id: req.params.id}})
        .then(item => res.json(item))
        .catch(next)
    })
  .post('/buy',
    (req, res, next) => {
      const item = {
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
      }
      // const token = req.body.token
      // stripe.charges.create({
      //   amount,
      //   currency: 'usd',
      //   // source: token, // obtained with Stripe.js
      //   source: 'tok_visa',
      //   description: 'Charge for job stuff'
      // }, (err, charge) => {
      //   console.log('STRIPE ERR', err)
      // })
      // .then(() => {
      Item.create(item).then(created => res.status(201).json(created))
    })
