var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const Customer = require('../models/customer');

/* GET all customers. */
router.get('/', async function(req, res, next) {
  const customers = await Customer.find();
  res.json(customers);
});

/* CREATE one customer */
router.post('/', async function(req, res, next) {
  console.log(req.body)
  const form_info = req.body;
  let myId = new mongoose.Types.ObjectId();
  const customer = new Customer({ 
    _id: myId,
    first_name: form_info.first_name, 
    last_name: form_info.last_name, 
    phone_number: form_info.phone_number
  });
  await customer.save();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.status(200);
  console.log(customer._id)
  res.json(myId)
});
/* GET one customer by ID */
router.get('/:userid', async function(req, res, next) {
  const customer = await Customer.findById(req.params.userid);
  console.log(customer);
  res.json(customer);
});

/* EDIT one customer by ID */
router.put('/:userid', async function(req, res, next) {
  let customer = await Customer.findById(req.params.userid);
  const form_info = req.body;
  let editedData = { 
    first_name: form_info.first_name, 
    last_name: form_info.last_name, 
    phone_number: form_info.phone_number
  };
  if (req.body.appointment) {
    editedData.appointment = req.body.appointment;
  }
  await customer.replaceOne(editedData)
  res.status(200);
  res.json(customer);
});

/* DELETE one customer by ID */
router.delete('/:userid', async function(req, res, next) {
  const customer = await Customer.findById(req.params.userid).deleteOne();
  res.json(customer);
});

module.exports = router;
