var express = require('express');
var router = express.Router();
const Barber = require('../models/barber');

/* GET all barbers. */
router.get('/', async function(req, res, next) {
    const barbers = await Barber.find();
    res.json(barbers);
});

/* GET one barber. */
router.get('/:barberId', async function(req, res, next) {
    const barber = await Barber.findById(req.params.barberId);
    res.json(barber);
});

module.exports = router;
