const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  price: { type: Number, required: true, maxLength: 100 },
  time: { type: Number, required: true, maxLength: 100},
  category: { type: String, required: true, enum: ["Hair", "Beard", "Facial Treatment", "Shave", "Packages & Combos"]}
});

// Virtual for author's URL
ServiceSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/services/${this._id}`;
});

// Export model
module.exports = mongoose.model("Service", ServiceSchema);
