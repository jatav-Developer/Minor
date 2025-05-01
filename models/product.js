const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  image: String,
  price: Number,
  quantity: String,
  ingredients: [String],
  benefits: [String],
  usage: String,
  sideEffects: [String],
  warnings: [String],
  certifications: [String],
  reviews: [{
    user: String,
    rating: Number,
    comment: String,
    date: { type: Date, default: Date.now }
  }],
  inStock: Boolean,
  availabilityLinks: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
