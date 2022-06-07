require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

const pool = require('./db');

// app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

//! ROUTES --->
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'API is UP and RUNNING!',
  });
});

app.post('/members', async (req, res) => {
  const { email, password } = req.body;
  const postMember = await pool.query(`INSERT INTO members (email, password) VALUES($1, $2) RETURNING *`, [email, password]);

  res.json(postMember.rows[0]);
});

app.get('/members', async (req, res) => {
  const getMembers = await pool.query('SELECT * FROM members');

  res.json(getMembers.rows);
});

app.get('/members/:id', async (req, res) => {
  const { id } = req.params;
  const getMemberId = await pool.query('SELECT * FROM members WHERE member_id = $1', [id]);

  res.json(getMemberId.rows);
});

app.put('/members/:id', async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  const putMember = await pool.query('UPDATE members SET email = $1, password = $2 WHERE member_id = $3', [email, password, id]);

  res.json(putMember);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
