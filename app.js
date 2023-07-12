var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var servicesRouter = require('./routes/services');
var barbersRouters = require('./routes/barbers');
var barbershopsRouter = require('./routes/barbershops');
var customersRouter = require('./routes/customers');
var timeslotsRouter = require('./routes/timeslots');
var appointmentRouter = require('./routes/appointments');

var app = express();
const cors = require("cors")
app.use(cors())

require('dotenv').config();

const dbUser = process.env.DATABASE_USER;
const dbPassword = process.env.DATABASE_PASSWORD;
const dbCluster = process.env.DATABASE_CLUSTER;
const dbCollection = process.env.DATABASE_COLLECTION;

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
//console.log(`mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}.ssqxifh.mongodb.net/${dbCollection}?retryWrites=true&w=majority`)
const mongoDB = `mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}.ssqxifh.mongodb.net/${dbCollection}?retryWrites=true&w=majority`

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/services', servicesRouter);
app.use('/appointments', appointmentRouter);
app.use('/barbers', barbersRouters);
app.use('/barbershops', barbershopsRouter);
app.use('/customers', customersRouter);
app.use('/timeslots', timeslotsRouter);

app.get('/appointment', async function(req, res, next) {
  res.redirect('/appointments')
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
