const { Pool } = require('pg');
require('dotenv').config();

// PostgreSQL Connection Pool بنانا
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// ڈیٹا بیس کنکشن ٹیسٹ کرنے کے لیے
pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};