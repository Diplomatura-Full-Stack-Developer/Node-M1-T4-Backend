const mongoose = require("mongoose");
const { randomUUID } = require("crypto");

const { Schema } = mongoose;

const productSchema = new Schema({
  id: {
    type: String,
    default: () => randomUUID(),
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = mongoose.model("Product", productSchema);