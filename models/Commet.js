var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commetSchema = new Schema({
  username: String,
  body:   String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commetSchema);
