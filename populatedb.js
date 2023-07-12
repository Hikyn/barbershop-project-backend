#! /usr/bin/env node

console.log(
    'This script populates appointments, barbers, barbershops, customers and services to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);
  
// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Appointment = require("./models/appointment");
const Barber = require("./models/barber");
const Barbershop = require("./models/barbershop");
const Customer = require("./models/customer");
const Service = require("./models/service");

const appointments = [];
const barbers = [];
const barbershops = [];
const customers = [];
const services = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createServices();
    await createBarbers();
    await createBarbershops();
    await createCustomers();
    await createAppointments();
    //await createGenres();
    //await createAuthors();
    //await createBooks();
    //await createBookInstances();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}
  
// We pass the index to the ...Create functions so that, for example,
// genre[0] will always be the Fantasy genre, regardless of the order
// in which the elements of promise.all's argument complete.
async function serviceCreate(index, name, price, time, category) {
    const service = new Service({ name: name, price: price, time: time, category: category });
    await service.save();
    services[index] = service;
    console.log(`Added service: ${name}`);
}

async function barberCreate(index, first_name, last_name, phone_number) {
    const barber = new Barber({ first_name: first_name, last_name: last_name, phone_number: phone_number });
    await barber.save();
    barbers[index] = barber;
    console.log(`Added barber: ${first_name} ${last_name}`);
}

async function barbershopCreate(index, name, location, map_index, staff) {
    const barbershop = new Barbershop({ name: name, location: location, map_index: map_index, staff: staff });
    await barbershop.save();
    barbershops[index] = barbershop;
    console.log(`Added barbershop: ${name}`);
}

async function customerCreate(index, first_name, last_name, phone_number, appointment) {
    const customer = new Customer({ first_name: first_name, last_name: last_name, phone_number: phone_number, appointment: appointment });
    await customer.save();
    customers[index] = customer;
    console.log(`Added customer: ${first_name} ${last_name}`);
}

async function appointmentCreate(index, date, location, barber, services, customer, status) {
    const appointment = new Appointment({ date: date, location: location, barber: barber, services: services, customer: customer, status: status });
    await appointment.save();
    appointments[index] = appointment;
    console.log(`Added appointment: ${date}`);
}
  
async function createServices() {
    console.log("Adding services");
    await Promise.all([
        serviceCreate(0, "Classic cut", 14, 30, "Hair"),
        serviceCreate(1, "Skin fade", 15, 30, "Hair"),
        serviceCreate(2, "Beard trim", 7, 30, "Beard"),
        serviceCreate(3, "Beard trim deluxe", 14, 30, "Beard"),
        serviceCreate(4, "Classic cut & beard trim", 18, 30, "Packages & Combos"),
        serviceCreate(5, "Skin fade & beard trim", 20, 30, "Packages & Combos"),
        serviceCreate(6, "Junior cut", 12, 30, "Hair"),
        serviceCreate(7, "Hot towel straight razor shave", 15, 30, "Shave"),
        serviceCreate(8, "Face spa", 15, 30, "Facial Treatment"),
    ]);
}
  
async function createBarbers() {
    console.log("Adding barbers");
    await Promise.all([
        barberCreate(0, "Aris", "Rodidis", "6943183333"),
        barberCreate(1, "Manolis", "Demetriidis", "6943184444"),
        barberCreate(2, "Thodoris", "Paulou", "6943185555"),
        barberCreate(3, "Nikos", "Moreas", "6943186666"),
        barberCreate(4, "Savvas", "Athanopoulos", "6943187777"),
        barberCreate(5, "Mihalis", "Maniatelis", "6943188888"),
    ]);
}

async function createBarbershops() {
    console.log("Adding barbershops");
    await Promise.all([
        barbershopCreate(0, "Greek barbershop", "Ippokratous", 10679, [barbers[0], barbers[1], barbers[2]]),
        barbershopCreate(1, "Authentic haircuts", "Parasiou 28", 10440, [barbers[3], barbers[4], barbers[5]])
    ]);
}

async function createCustomers() {
    console.log("Adding customers");
    await Promise.all([
        customerCreate(0, "Makis", "Katsaroulis", "6943181212"),
        customerCreate(1, "Alkis", "Spinelis", "6943182323"),
        customerCreate(2, "Nasos", "Anthosis", "6943183434"),
        customerCreate(3, "Manos", "Markelis", "6943184545"),
        customerCreate(4, "Iordanis", "Apostolakis", "6943185656"),
    ]);
}

async function createAppointments() {
    console.log("Adding appointments");
    const d = new Date();
    console.log(customers[0])
    await Promise.all([
        appointmentCreate(0, new Date(), barbershops[0], barbers[0], [services[0]], customers[0], "Scheduled"),
        appointmentCreate(1, new Date(), barbershops[0], barbers[1], [services[0],services[2]], customers[1], "Scheduled"),
        appointmentCreate(2, new Date(), barbershops[0], barbers[2], [services[1]], customers[2], "Scheduled"),
        appointmentCreate(3, new Date(), barbershops[1], barbers[3], [services[0]], customers[3], "Scheduled"),
        appointmentCreate(5, new Date(), barbershops[1], barbers[5], [services[1],services[2]], customers[4], "Scheduled")
    ]);
}