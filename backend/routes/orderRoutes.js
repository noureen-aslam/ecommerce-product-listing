// backend/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/place-order', async (req, res) => {
  try {
    const { name, phone, address, items, totalAmount } = req.body;
    const newOrder = new Order({ name, phone, address, items, totalAmount });
    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully!' });
  } catch (err) {
    console.error('Order saving error:', err);
    res.status(500).json({ error: 'Failed to place order' });
  }
});
// GET /api/orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});
router.get('/orders', async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});



module.exports = router;
