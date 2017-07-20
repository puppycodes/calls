require('./connectionHelper');

var expect = require('chai').expect
  , supertest = require('supertest')
  , app = require('../app.js')
  , Contact = require('../models/Contact');

describe('dashboard', function () {
  before(function (done) {
    Contact.create({
      name: 'Contact',
      phoneNumber: '+567899043',
      description: 'A simple Contact',
      createdAt : new Date()
    })
    .then(function (Contact) {
      done();
    });
  });

  after(function (done) {
    Contact.remove({}, done);
  });

  describe('GET /dashboard', function () {
    it('list all contacts', function (done) {
      var agent = supertest(app);
      agent
        .get('/dashboard')
        .expect(function (response) {
          expect(response.text).to.contain('Contacts');
          expect(response.text).to.contain('+567899043');
          expect(response.text).to.contain('A simple contact');
        })
        .expect(200, done);
    });
  });
});
