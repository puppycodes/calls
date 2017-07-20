var express = require('express');
var router = express.Router();
var Contact = require('../models/contact');

// POST /contacts/new
router.post('/new', function (req, res) {
  var name = req.body.name;
  var description = req.body.description;
  var phoneNumber = req.body.phone_number;
  var createdAt = new Date();

  if (!description || !phoneNumber || !name) {
    return res.status(400).send('name, description and phoneNumber fields are required.')
  }
  Contact.create({ name: name, phoneNumber: phoneNumber, description: description, createdAt: createdAt })
    .then(function (savedContact) {
      req.flash('success', 'Contact Added!');
      return res.status(201)
        .end();
    })
    .catch(function (err) {
      req.flash('errors', 'Contact Add Failed...');
    })
});

module.exports = router;
