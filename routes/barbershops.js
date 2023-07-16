var express = require('express');
var router = express.Router();
const Barbershop = require('../models/barbershop');
const Barber = require('../models/barber');

/* GET all barbershops. */
router.get('/', async function(req, res, next) {
    const barbershops = await Barbershop.find();
    res.status(200);
    res.json(barbershops);
});

/* GET one customer by ID */
router.get('/:barbershopId', async function(req, res, next) {
    const barbershop = await Barbershop.findById(req.params.barbershopId);
    res.status(200);
    res.json(barbershop);
  });

/* GET all barbers from barbershop with ID */
router.get('/:barbershopId/barbers', async function(req, res, next) {
    const barbershop = await Barbershop.findById(req.params.barbershopId).populate('staff');
    const barbers = barbershop.staff;
    res.status(200);
    res.json(barbers);
});

module.exports = router;
