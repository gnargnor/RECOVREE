var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require('../models/user');
var path = require('path');

var mongoose = require("mongoose");

var RecovreeSchema = mongoose.Schema({});

var CheckInSchema = mongoose.Schema({
  feelings: {type: Array},
  drugAlcoholIntake: {type: Boolean},
  medication: {type: Boolean},
  sleep: {type: Number},
  dream: {type: Boolean},
  exercise: {type: Number},
  food: {type: Number},
  spnsrMntrConnect: {type: Boolean},
  groupMeet: {type: Number},
  commntyService: {type: Boolean},
  stressors: {type: Array},
  selfishDishonest: {type: Boolean},
  howSelfshDishnt: {type: String},
  tomorrowGoal: {type: String},
  dailyGoal: {type: String},
  gratitude: {type: String},
  peerSupport: {type: Boolean},
  counselor: {type: Boolean},
  checkInDate: {type: Date, default: Date.now},
  // memberID: {type: Schema.ObjectId, ref: 'Registration'} //references Registration Schema
});

var Recovree = mongoose.model('recovree', RecovreeSchema, 'recovree');
var CheckIn = mongoose.model('checkIn', CheckInSchema, 'recovree');

router.get('/', function (req, res) {
  Recovree.find({}, function(err, recovree){
    if(err){
      console.log("Mongo Error: ", err);
      res.send(500);
    }
    res.send(listings);
  });
});

router.post("/", function(req,res){
  var reflection = req.body;
  var user = req.user;
  var newForm = new CheckIn({
    feelings : reflection.feelings,
    drugAlcoholIntake: reflection.drugAlcoholIntake,
    medication: reflection.medication,
    sleep: reflection.sleep,
    dream: reflection.dream,
    exercise: reflection.exercise,
    food: reflection.food,
    spnsrMntrConnect: reflection.spnsrMntrConnect,
    groupMeet: reflection.groupMeet,
    commntyService: reflection.commntyService,
    stressors: reflection.stressors,
    selfishDishonest: reflection.selfishDishonest,
    howSelfshDishnt: reflection.howSelfshDishnt,
    tomorrowGoal: reflection.tomorrowGoal,
    dailyGoal: reflection.dailyGoal,
    gratitude: reflection.gratitude,
    peerSupport: reflection.peerSupport,
    counselor: reflection.counselor,
    checkInDate: reflection.checkInDate,
    memberID: user.memberID
  });

  newForm.save(newForm, function(err, savedCheckIn){
    if(err){
      console.log("Error: ", err);
      res.sendStatus(500);
    }
    res.send(savedHouse);
  });
});








module.exports = router;
