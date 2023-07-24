var express = require('express');
var router = express.Router();
const Service = require('../models/service');
let tryCatch = require('../utils/tryCatch')

/* GET all services. */
router.get('/', tryCatch(async function(req, res, next) {
    const services = await Service.find();
    if (!appointment) {
        throw new Error('No services found')
      }
      res.status(200);
    res.json(services);
}));

module.exports = router;
