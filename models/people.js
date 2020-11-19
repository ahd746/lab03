const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  hireDate: {
    type: Date,
    default: '01-01-1999',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('People', PeopleSchema);