const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Number = require('./models/Number');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/api/numbers', async (req, res) => {
  const numbers = await Number.find();
  res.json(numbers);
});

app.post('/api/numbers', async (req, res) => {
  const number = new Number(req.body);
  await number.save();
  res.json(number);
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});