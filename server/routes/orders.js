const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;

const stripe = require("stripe")(keySecret);

const db = require('APP/db')

module.exports = require('express').Router()
  .get('/',
    (req, res, next) => {
      db.select().from('items').timeout(1000)
      .then((rows) => {
        return res.status(200).json(rows)
      })
    })
  .post('/',
    (req, res, next) => {
      db('items').insert(req.body)
      .then((result) => {
        return res.status(201).json(result)
      })
    })