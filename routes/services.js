var express = require('express');
var router = express.Router();
const Service = require('../models/service');

/* GET all services. */
router.get('/', async function(req, res, next) {
    const services = await Service.find();
    res.json(services);
});

module.exports = router;
