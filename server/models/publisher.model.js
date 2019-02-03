const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  url: String,
  category: String,
  language: String,
  country: String,
});

module.exports = mongoose.model('Publisher', publisherSchema);
