var express = require('express');
var router = express.Router();
const Appointment = require('../models/appointment');
const Customer = require('../models/customer');
const tryCatch = require('../utils/tryCatch');

/* GET current appointments */
router.get('/', tryCatch(async function(req, res, next) {
  const appointments = await Appointment.find();
  if (!appointments) {
    throw new Error("Appointment not found");
  }
  res.status(200);
  res.json(appointments);
}));

/* GET previous appointments */
/* GET one appointment by ID */
router.get('/:appointmentId', tryCatch(async function(req, res, next) {
  if (req.params.appointmentId.length !== 24) {
    throw new Error('ID length must be 24 symbols')
  }
  const appointment = await Appointment.findById(req.params.appointmentId).populate('barber location services');
  if (!appointment) {
    throw new Error('Appointment not found')
  }
  res.status(200);
  res.json(appointment);
}));

/* POST new appointment */
router.post('/', tryCatch(async function(req, res, next) {
  const form_info = req.body;
  console.log(form_info)
  const customer = await Customer.findById(form_info.customer_id);
  if (!customer) {
    throw new Error('Customer not found');
  }
  const appointment = new Appointment({ 
    date: form_info.date,
    timeslot: form_info.timeslot,
    location: form_info.location, 
    barber: form_info.barber, 
    services: form_info.services, 
    customer: customer,
    status: form_info.status,
    
  });
  await appointment.save();
  res.status(200); 
  res.json({isCreated: true});
}));

/* EDIT existing appointment */
router.put('/:appointmentId', tryCatch(async function(req, res, next) {
  let appointment = await Appointment.findById(req.params.appointmentId);
  if (!appointment) {
    throw new Error('Appointment not found')
  }
  const form_info = req.body;
  let editedData = { 
    date: form_info.date,
    location: form_info.location, 
    barber: form_info.barber, 
    services: form_info.services, 
    customer: form_info.customer, 
    status: form_info.status 
  };

  await appointment.replaceOne(editedData)
  res.status(200);
  res.json(appointment);
}));

/* DELETE existing appointment */
router.delete('/:appointmentId', async function(req, res, next) {
  const appointment = await Appointment.findById(req.params.appointmentId).deleteOne();
  if (!appointment) {
    throw new Error('Appointment not found')
  }
  res.status(200)
  res.json(appointment);
});

module.exports = router;
