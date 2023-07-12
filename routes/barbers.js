var express = require('express');
var router = express.Router();
const Barber = require('../models/barber');

/* GET all barbers. */
router.get('/', async function(req, res, next) {
    const barbers = await Barber.find();
    res.json(barbers);
});

module.exports = router;
