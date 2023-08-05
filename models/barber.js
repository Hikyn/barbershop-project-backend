const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BarberSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, required: true, maxLength: 100 },
  phone_number: { type: Number, required: true, maxLength: 100 },
  working_hours: {
    monday: {
      start: { type: Number, default: -1 },
      end: { type: Number, default: -1 },
      isWorking: { type: Boolean, default: false },
    },
    tuesday: {
      start: { type: Number, default: -1 },
      end: { type: Number, default: -1 },
      isWorking: { type: Boolean, default: false },
    },
    wednesday: {
      start: { type: Number, default: -1 },
      end: { type: Number, default: -1 },
      isWorking: { type: Boolean, default: false },
    },
    thursday: {
      start: { type: Number, default: -1 },
      end: { type: Number, default: -1 },
      isWorking: { type: Boolean, default: false },
    },
    friday: {
      start: { type: Number, default: -1 },
      end: { type: Number, default: -1 },
      isWorking: { type: Boolean, default: false },
    },
    saturday: {
      start: { type: Number, default: -1 },
      end: { type: Number, default: -1 },
      isWorking: { type: Boolean, default: false },
    },
    sunday: {
      start: { type: Number, default: -1 },
      end: { type: Number, default: -1 },
      isWorking: { type: Boolean, default: false },
    },
  },
});

// Virtual for author's full name
BarberSchema.virtual("fullname").get(function () {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  let fullname = "";
  if (this.first_name && this.last_name) {
    fullname = `${this.last_name}, ${this.first_name}`;
  }

  return fullname;
});

// Virtual for author's URL
BarberSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/barbers/${this._id}`;
});

// Export model
module.exports = mongoose.model("Barber", BarberSchema);
