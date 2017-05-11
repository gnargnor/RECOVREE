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
  memberID: {type: Schema.ObjectId, ref: 'Registration'} //references Registration Schema
});

var Recovree = mongoose.model('recovree', RecovreeSchema, 'recovree');
var CheckIn = mongoose.model('checkIn', CheckInSchema, 'recovree');


















module.exports = router;
