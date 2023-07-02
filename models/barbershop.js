const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BarbershopSchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    location: { type: String, required: true, maxLength: 100 },
    map_index: { type: Number, required: true, maxLength: 100 },
    staff: [{ type: Schema.Types.ObjectId, ref: "Barber", required: true }],
});

// Virtual for author's URL
BarbershopSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/barbershops/${this._id}`;
});

// Export model
module.exports = mongoose.model("Barbershop", BarbershopSchema);
