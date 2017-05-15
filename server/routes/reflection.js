var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require('../models/user');
var path = require('path');

var mongoose = require("mongoose");

var RecovreeSchema = mongoose.Schema({});

var ReflectionSchema = mongoose.Schema({
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
  dailyGoal: {type: Boolean},
  gratitude: {type: String},
  peerSupport: {type: Boolean},
  counselor: {type: Boolean},
  // reflectionDate: {type: String},
  // reflectionTime: {type: String},
  reflectionDate: {type: Date, default: Date.now},
  // memberID: {type: Schema.ObjectId, ref: 'Registration'} //references Registration Schema
});

var Reflection = mongoose.model('reflection', ReflectionSchema);

router.get('/', function (req, res) {
  Recovree.find({}, function(err, recovree){
    if(err){
      console.log("Mongo Error: ", err);
      res.send(500);
    }
    res.send(listings);
  });
});

router.post('/', function(req,res){

  var reflection = req.body;
  var newReflection = new Reflection({
    id : req.user._id,
    date: reflection.reflectionDate,
    // time: reflection.reflectionTime,
    feelings : reflection.feelings,
  });

  console.log('----NEW REFLECTION---', newReflection);

  newReflection.save(newReflection, function(err, savedReflection){
    if(err){
      console.log("Error: ", err);
      res.sendStatus(500);
    }
    console.log('saved to db ----------', newReflection);
    res.send(savedReflection);
  });
});


router.put('/', function (req, res) {
  console.log('----PUT---', req.body);

  // var reflection = req.body;
  // var newReflection = new Reflection({
  //   drugAlcoholIntake: reflection.drugAlcoholIntake,
  //   medication: reflection.medication,
  //   sleep: reflection.sleep,
  //   dream: reflection.dream,
  //   exercise: reflection.exercise,
  //   food: reflection.food,
  //   spnsrMntrConnect: reflection.spnsrMntrConnect,
  //   groupMeet: reflection.groupMeet,
  //   commntyService: reflection.commntyService,
  //   stressors: reflection.stressors,
  //   selfishDishonest: reflection.selfishDishonest,
  //   howSelfshDishnt: reflection.howSelfshDishnt,
  //   tomorrowGoal: reflection.tomorrowGoal,
  //   dailyGoal: reflection.dailyGoal,
  //   gratitude: reflection.gratitude,
  //   peerSupport: reflection.peerSupport,
  //   counselor: reflection.counselor,
  //   // memberID: users.memberID
  // });
  //edit an employee
    var reflection = req.body;
    // var foundReflection = new Reflection(){
    //
    // }
    // Reflection.findByIdAndRemove(reflection, function(err, foundReflection){
    //   if (err) {
    //     console.log(err);
    //     res.sendStatus(500);
    //   }
    //   foundReflection.save(function(err, savedEmployee) {
    //     if (err){
    //       console.log(err);
    //       res.sendStatus(500);
    //     }
    //     res.send(savedEmployee);
    //   });
    // });

});






module.exports = router;
