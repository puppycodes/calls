var mongoose = require('mongoose');

var Contact = new mongoose.Schema({
  name:String,
  phoneNumber: String,
  description: String,
  createdAt : Date
});

// Delete model definition in case it is already defined
delete mongoose.models.contact;

var contact = mongoose.model('contact', Contact);
module.exports = contact;
