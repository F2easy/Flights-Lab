const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const flightCtrl = require('../controllers/flights');
	
// GET /movies
router.get('/', flightCtrl.index);
// GET /movies/new
router.get('/new', flightCtrl.new);
router.get('/:id', flightCtrl.show)
// POST /movies
router.post('/', flightCtrl.create);
 
// POST /
// router.post('/', flightsCtrl.)

router.post('/:id', flightCtrl.addDestination)
	
module.exports = router;
