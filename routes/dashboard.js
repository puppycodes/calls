var express = require('express');
var router = express.Router();
var Contact = require('../models/contact');


// GET /dahsboard
router.get('/', function (req, res) {
  Contact.find()
    .then(function (contacts) {
      res.render('dashboard/index', { contacts: contacts });
    });
});

module.exports = router;
