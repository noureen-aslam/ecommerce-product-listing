const express = require('express');
const router = express.Router();

// TEMP user store (in-memory)
let users = [];

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ error: 'All fields required' });

  // Add to memory store
  users.push({ email, password });

  return res.status(200).json({ message: 'Signup successful' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const existingUser = users.find((u) => u.email === email && u.password === password);
  
  if (!existingUser) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  return res.status(200).json({ message: 'Login successful' });
});

module.exports = router;
