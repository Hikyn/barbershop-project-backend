var express = require('express');
var router = express.Router();
const Barber = require('../models/barber');
const Appointment = require('../models/appointment');

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

/* GET one barber's appointments */
router.get('/:barberId/appointments', async function(req, res, next) {
    const barber = await Barber.findById(req.params.barberId);
    const appointments = await Appointment.find({barber: barber});
    res.json(appointments);
});

/* GET one barber's timeslots */
router.get('/:barberId/timeslots/:day/:month/:year', async function(req, res, next) {
    const barber = await Barber.findById(req.params.barberId);

    const date = new Date(`${req.params.year}-${req.params.month}-${req.params.day}`)
    const day = date.getDay();
    const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    const working_hours = barber.working_hours[dayNames[day]];

    const appointments = await Appointment.find({barber: barber, date: {day: Number(req.params.day), month: Number(req.params.month), year: Number(req.params.year)}});
    if (working_hours.isWorking === false) {
        res.json(working_hours)
    } else {
        let time = working_hours.start;
        let timeslots = []
        while(time < working_hours.end) {
            timeslots.push(time)
            // If time is 800, 900, 1500 etc
            if ( time % 50 === 0) {
                time+= 30;
            } else {
                // Time is 830, 930, 1530
                time+= 70;
            }
        }

        appointments.forEach((appointment) => {
            console.log(appointment.timeslot)
            let index = timeslots.findIndex((timeslot) => timeslot === appointment.timeslot);
            timeslots.splice(index, 1);
        })
        res.json(timeslots)
    }
});

module.exports = router;
