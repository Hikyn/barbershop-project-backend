var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const Customer = require("../models/customer");
let tryCatch = require("../utils/tryCatch");

/* GET all customers. */
router.get(
  "/",
  tryCatch(async function (req, res, next) {
    const customers = await Customer.find();
    if (!customers) {
      throw new Error("Customers not found");
    }
    res.json(customers);
  }),
);

/* CREATE one customer */
router.post(
  "/",
  tryCatch(async function (req, res, next) {
    console.log(req.body);
    const form_info = req.body;
    let myId = new mongoose.Types.ObjectId();
    if (!form_info.first_name) {
      throw new Error("Missing first name");
    }
    if (!form_info.last_name) {
      throw new Error("Missing last name");
    }
    if (!form_info.phone_number) {
      throw new Error("Missing phone number");
    }
    const customer = new Customer({
      _id: myId,
      first_name: form_info.first_name,
      last_name: form_info.last_name,
      phone_number: form_info.phone_number,
    });
    await customer.save();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.status(200);
    console.log(customer._id);
    res.json(myId);
  }),
);
/* GET one customer by ID */
router.get(
  "/:userid",
  tryCatch(async function (req, res, next) {
    const customer = await Customer.findById(req.params.userid);
    if (!customer) {
      throw new Error("Customer not found");
    }
    console.log(customer);
    res.stats(200);
    res.json(customer);
  }),
);

/* EDIT one customer by ID */
router.put(
  "/:userid",
  tryCatch(async function (req, res, next) {
    let customer = await Customer.findById(req.params.userid);
    if (!customer) {
      throw new Error("Customer not found");
    }
    if (!form_info.first_name) {
      throw new Error("Missing first name");
    }
    if (!form_info.last_name) {
      throw new Error("Missing last name");
    }
    if (!form_info.phone_number) {
      throw new Error("Missing phone number");
    }
    const form_info = req.body;
    let editedData = {
      first_name: form_info.first_name,
      last_name: form_info.last_name,
      phone_number: form_info.phone_number,
    };
    if (req.body.appointment) {
      editedData.appointment = req.body.appointment;
    }
    await customer.replaceOne(editedData);
    res.status(200);
    res.json(customer);
  }),
);

/* DELETE one customer by ID */
router.delete(
  "/:userid",
  tryCatch(async function (req, res, next) {
    const customer = await Customer.findById(req.params.userid).deleteOne();
    if (!customer) {
      throw new Error("Customer not found");
    }
    res.status(200);
    res.json(customer);
  }),
);

module.exports = router;
