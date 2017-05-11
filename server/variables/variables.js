var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

var gv = {
  test: 'test',
  testFunc: function(output){
    console.log(output);
  },
};


module.exports = gv;
