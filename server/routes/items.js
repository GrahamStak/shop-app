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
      Item.create(req.body).then((item) => {
        return Item.findAll({})
      })
      .then(items => res.status(200).json(items))
    })
  .post('/delete',
    (req, res, next) => {
      Item.destroy({where:{id:req.body.id}}).then((item) => {
        return Item.findAll({})
      })
      .then(items => {
        return res.status(200).json(items)})
    })
  .get('/:id',
    (req, res, next) => {
      Item.findOne({where: {id: req.params.id}})
        .then(item => res.json(item))
        .catch(next)
    })
