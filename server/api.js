require('dotenv').config();
const express = require('express');
// const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

// app.use(cors());
app.use(express.json());

app.post('/user', (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
