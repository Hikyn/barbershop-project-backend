var express = require('express');
var router = express.Router();
const Barbershop = require('../models/barbershop');
const Barber = require('../models/barber');
let tryCatch = require('../utils/tryCatch');

/* GET all barbershops. */
router.get('/', tryCatch(async function(req, res, next) {
    const barbershops = await Barbershop.find();
    if (!barbershops) {
        throw new Error('Barbershops are not found')
    }
    res.status(200);
    res.json(barbershops);
}));

/* GET one customer by ID */
router.get('/:barbershopId', tryCatch(async function(req, res, next) {
    const barbershop = await Barbershop.findById(req.params.barbershopId);
    if (!barbershop) {
        throw new Error('Barbershop is not found')
    }
    res.status(200);
    res.json(barbershop);
  }));

/* GET all barbers from barbershop with ID */
router.get('/:barbershopId/barbers', tryCatch(async function(req, res, next) {
    const barbershop = await Barbershop.findById(req.params.barbershopId).populate('staff');
    if (!barbershop) {
        throw new Error('Barbershop is not found')
    }
    const barbers = barbershop.staff;
    res.status(200);
    res.json(barbers);
}));

module.exports = router;
