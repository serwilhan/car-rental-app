require('dotenv').config();
const express = require('express');
// const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

const pool = require('./db');

// app.use(cors());
app.use(express.json());

// ROUTES
app.post('/members', async (req, res) => {
  // try {
  // } catch (error) {
  //   console.error(error.message);
  // }
  const { email, password } = req.body;
  const newMember = await pool.query(`INSERT INTO members (email, password) VALUES($1, $2) RETURNING *`, [email, password]);

  res.json(newMember.rows[0]);
});

app.get('/members', async (req, res) => {
  const allMembers = await pool.query('SELECT * FROM members');

  res.json(allMembers.rows);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
