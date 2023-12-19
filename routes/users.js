var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const flightsCtrl = require('../controllers/flights');
	
// GET /movies
router.get('/', flightsCtrl.index);
// GET /movies/new
router.get('/new', flightsCtrl.new);
// POST /movies
// router.post('/', flightsCtrl.create);
	
module.exports = router;

module.exports = router;
