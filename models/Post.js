var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title:  String,
  preview: String,
  tech: String,
  body:   String,
  url: String,
  image: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
