var express = require('express')
var router = express.Router()
const faker = require('faker')

// Database
const db = require('../dbconfig/db')
const Product = require('../models/Product')
const User = require('../models/User')
const { response } = require('express')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

// Puts dummy data in database
router.get('/populate', (req, res, next) => {
  let numOfProducts = 3
  for (let i = 0; i < numOfProducts; i++) {
    Product.create({
      name: faker.commerce.productName(),
      price: faker.random.number()
    })
      .catch(e => console.log(e))
  }

  let numOfUsers = 2
  User.create({
    username: 'admin',
    password: 'myTerriblePassword'
  })
  .catch(error => console.log(error))
  for (let i = 0; i < numOfUsers - 1; i++) {
    User.create({
      username: faker.internet.userName(),
      password: faker.internet.password()
    })
      .catch(e => console.log(e))
  }

  res.render('populated')
  console.log('Successfully populated dummy data')
})

router.post('/search', async (req, res, next) => {
  const query = req.body.query
  db.query(`SELECT id, name, price FROM products WHERE name LIKE '%${query}%'`)
  .then(response => res.send(response[0]))
  .catch(error => console.log(error))
})

module.exports = router
