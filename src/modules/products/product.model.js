const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({

  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  offer: {
    type: Boolean,
    default: false,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  features: {
    type: [String],
    required: true,
  },
  deleted: {
    type: Boolean,
    default: false,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
    required: true,
    min: 0,
    max: 40,
  },
});



module.exports = mongoose.model("Product", productSchema);