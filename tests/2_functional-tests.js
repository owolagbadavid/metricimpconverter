const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  
suite('GET request to /api/convert', function() {
test('Convert a valid input such as 10L', function (done) {
      chai
        .request(server)
        .get('/api/convert/?input=10L')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.returnUnit, 'gal');
          assert.equal(res.body.returnNum, 2.64172);
          done();
        });
    });

test('Convert an invalid input such as 32g', function (done) {
      chai
        .request(server)
        .get('/api/convert/?input=30g')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'invalid unit');
          done();
        });
    });

test('Convert an invalid number such as 3/7.2/4kg', function (done) {
      chai
        .request(server)
        .get('/api/convert/?input=3/7.2/4kg')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'invalid number');
          done();
        });
    });

test('Convert an invalid number AND unit such as 3/7.2/4kilomegagram', function (done) {
      chai
        .request(server)
        .get('/api/convert/?input=3/7.2/4kilomegagram')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'invalid number and unit');
          done();
        });
    });

test('Convert with no number such as kg', function (done) {
      chai
        .request(server)
        .get('/api/convert/?input=kg')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.returnUnit, 'lbs');
          assert.equal(res.body.returnNum, 2.20462);
          done();
        });
    });
  
})
});
