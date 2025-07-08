const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userEmail: String,
  items: [
    {
      productId: String,
      name: String,
      image: String,
      price: Number,
      quantity: Number,
    },
  ],
  totalAmount: Number,
  address: String,
  phone: String,
  placedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
