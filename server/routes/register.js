var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require('../models/user');
var path = require('path');

var mongoose = require("mongoose");

//SAVE ONLY USERNAME AND PASSWORD FROM REGISTER VIEW
// Handles request for HTML file
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../public/views/templates/register.html'));
});

// Handles POST request with new user data
router.post('/', function(req, res, next) {
  var newUser = req.body;
  var userToSave = {
    username: newUser.username,
    password: newUser.password,
    memberID: newUser.memberID,
    userType: newUser.userType
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
  medication: {type: Boolean},
  termsAgreement: {type: Boolean},
  // memberID: {type: Schema.ObjectId, ref: 'User'}
});

var Recovree = mongoose.model('recovree', RecovreeSchema, 'recovree');
var Registration = mongoose.model('registration', RegistrationSchema, 'recovree');

router.post("/registration", function(req,res){
  var registration = req.body;
  var newForm = new Registration({
    state : registration.state,
    county : registration.county,
    gender : registration.gender,
    birthYear : registration.birthYear,
    drugChoice : registration.drugChoice,
    sobrietyDate : registration.sobrietyDate,
    programPayment : registration.programPayment,
    medication : registration.medication,
    termsAgreement : registration.termsAgreement,
    memberID: registration.memberID
  });

  newForm.save(newForm, function(err, savedRegistration){
    if(err){
      console.log("Error: ", err);
      res.sendStatus(500);
    }
    res.send(savedRegistration);
  });
});


module.exports = router;
