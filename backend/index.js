const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes); // ✅ add this line


app.use('/api/products', productRoutes);
app.use('/api', authRoutes); // ✅ Correct base path for /signup

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
