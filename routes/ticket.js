const express = require('express');
const router = express.Router();

const ticketCtrl = require('../controllers/ticket');


router.post('/', ticketCtrl.create);

module.exports = router;