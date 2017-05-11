var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require('../models/user');
var path = require('path');

var mongoose = require("mongoose");

//SAVE USERNAME AND PASSWORD FROM REGISTER VIEW
// Handles request for HTML file
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../public/views/templates/register.html'));
});

// Handles POST request with new user data
router.post('/', function(req, res, next) {
  /*
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  */
  var userToSave = {
    username: req.body.username,
    password: req.body.password,
  };

  Users.create(userToSave, function(err, post) {
    if (err) {
      // next() here would continue on and route to routes/index.js
      next(err);
    } else {
      // route a new express request for GET '/'
      res.redirect('/');
    }
  });
});



//SAVE ALL OTHER REGISTRATION DATA FROM REGISTER VIEW
var RecovreeSchema = mongoose.Schema({});

var RegistrationSchema = mongoose.Schema({
  state: {type: String},
  county: {type: String},
  gender: {type: String},
  birthYear: {type: Number},
  drugChoice: {type: String},
  sobrietyDate: {type: Date},
  programPayment: {type: String},
  medication: {type: Schema.ObjectId, ref: 'User'},
  termsAgreement: {type: Boolean},
  memberID: {type: Schema.ObjectId, ref: 'User'}
});

var Recovree = mongoose.model('recovree', RecovreeSchema, 'recovree');
var Registration = mongoose.model('registration', RegistrationSchema, 'recovree');



module.exports = router;
