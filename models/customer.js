const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, required: true, maxLength: 100 },
  phone_number: { type: Number, required: true, maxLength: 100 },
});

// Virtual for author's full name
CustomerSchema.virtual("fullname").get(function () {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  let fullname = "";
  if (this.first_name && this.last_name) {
    fullname = `${this.last_name}, ${this.first_name}`;
  }

  return fullname;
});

// Virtual for author's URL
CustomerSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/customers/${this._id}`;
});

// Export model
module.exports = mongoose.model("Customer", CustomerSchema);
