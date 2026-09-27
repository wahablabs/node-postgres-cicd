const express = require('express');
require('dotenv').config();
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.json({
    message: 'Dockerized Node.js + PostgreSQL API is running!',
    status: 'Success'
  });
});

// Database Test Route
app.get('/db-test', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.json({
      message: 'Database connected successfully!',
      time: result.rows[0].now
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed', details: err.message });
  }
});

// Health check endpoint (Docker aur CI/CD ke liye)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});