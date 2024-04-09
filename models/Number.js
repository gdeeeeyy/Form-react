const mongoose = require('mongoose');

const numberSchema = new mongoose.Schema({
  number: { type: String, required: true },
  name: { type: String, required: true },
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  __v: { type: Number, default: 0 }
});

module.exports = mongoose.model('Number', numberSchema);