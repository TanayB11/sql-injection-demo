var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/search', (req, res, next) => {
  const query = req.body.query
  res.send('Your wish is my command.')
})

module.exports = router
