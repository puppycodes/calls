var expect = require('chai').expect
  , supertest = require('supertest')
  , app = require('../app.js')
  , Contact = require('../models/contact');

describe('contacts', function () {
  describe('POST to /contacts/new', function () {
    it('creates a new contact', function () {
      var agent = supertest(app);
      return agent
        .post('/contacts/new')
        .send({
          name: 'Contact',
          description: 'A simple contact',
          phone_number: '+5555555'
        })
        .expect(201)
        .expect(function(res) {
          return Contact.find({})
            .then((contacts) => {
              expect(contacts.length).to.equal(1);
            });
        });
    });
  });
});
