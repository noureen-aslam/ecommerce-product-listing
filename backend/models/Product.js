const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  category: String,
  price: Number,
  rating: Number
});

module.exports = mongoose.model('Product', productSchema);
