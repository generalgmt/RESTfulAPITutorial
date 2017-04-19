'use strict';

var app = require('../server');
var chai = require('chai');
var request = require('supertest');

var expect = chai.expect;

describe('API Tests', function() {
  var task = {
    name: 'integration test',
  };

  describe('## Create task ', function() {
    it('should create a task', function(done) {
      request(app)
        .post('/tasks')
        .send(task)
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body.name).to.equal('integration test');
          task = res.body;
          done();
        });
    });
  });

  describe('# Get all tasks', function() {
    it('should get all tasks', function(done) {
      request(app)
        .get('/tasks')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
  describe('Get a task by id', function() {
    it('should get a task', function(done) {
      request(app)
        .get('/tasks/' + task._id)
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body.name).to.equal('integration test');
          done();
        });
    });
  });

  describe('Update a task by id', function() {
    it('should modify a task', function(done) {
      task.name = 'New Task'
      request(app)
        .put('/tasks/' + task._id)
        .send(task)
        .end(function(err, res) {
          expect(res.body.name).to.equal('New Task');
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });
  describe('Delete a task by id', function() {
    it('should delete a task', function(done) {
      request(app)
        .delete('/tasks/' + task._id)
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body.message).to.equal('Task successfully deleted');
          done();
        });
    });
  });
});
