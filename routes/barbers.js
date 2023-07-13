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

/* GET one barber's working hours. */
router.get('/:barberId/working_hours', async function(req, res, next) {
    const barber = await Barber.findById(req.params.barberId);
    res.json(barber.working_hours);
});

/* GET one barber's working hours by day of the week ex. monday/friday */
router.get('/:barberId/working_hours/:day', async function(req, res, next) {
    const barber = await Barber.findById(req.params.barberId);
    res.json(barber.working_hours[req.params.day]);
});
module.exports = router;
