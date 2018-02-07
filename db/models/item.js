'use strict'

// bcrypt docs: https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcryptjs')
const {FLOAT, STRING, TEXT} = require('sequelize')

module.exports = db => db.define('item', {
    name: STRING,
    description: TEXT,
    price: FLOAT,
 })