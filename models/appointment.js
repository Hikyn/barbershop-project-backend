const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    date: { 
      day: { type: Number, required: true}, 
      month: { type: Number, required: true}, 
      year: { type: Number, required: true}
    },
    timeslot: { type: Number, required: true },
    location: { type: Schema.Types.ObjectId, ref: "Barbershop", required: true },
    barber: { type: Schema.Types.ObjectId, ref: "Barber", required: true },
    services: [{ type: Schema.Types.ObjectId, ref: "Service", required: true }],
    customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
    status: { type: String, required: true, enum: ["Scheduled", "Fulfilled", "No show"], default: "Scheduled"}
});

// Virtual for author's URL
AppointmentSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/appointments/${this._id}`;
});

// Export model
module.exports = mongoose.model("Appointment", AppointmentSchema);
