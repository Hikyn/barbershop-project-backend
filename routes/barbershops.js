var express = require('express');
var router = express.Router();
const Barbershop = require('../models/barbershop');

/* GET home page. */
router.get('/', async function(req, res, next) {
    const barbershops = await Barbershop.find();
    res.json(barbershops);
});

module.exports = router;
