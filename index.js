const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/home', (req, res) => {
  res.json({ message: 'HI!👋 Floyden Here' })
});

app.listen(process.env.PORT, () => {
  console.log('Server listening on port 3000');
});
