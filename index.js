const express = require('express');

const app = express();

app.get('/home', (req, res) => {
  res.json({ message: 'HI!👋 Floyden Here' })
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
