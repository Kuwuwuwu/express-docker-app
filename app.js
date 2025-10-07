const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongo:27017/testdb';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('👋 Вітаємо у Express-додатку, що працює в Docker!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});