'use strict'
const db = require('APP/db')
const {Item} = db
const key = require('../keys')
const stripe = require('stripe')(key)
const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    console.log("ITEMS HERE")
    Item.findAll({})
      .then(items => {
        return res.status(200).json(items)})
      .catch(next)
  })
  .post('/',
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
