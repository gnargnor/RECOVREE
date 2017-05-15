var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;
var gv = require('../variables/variables.js');

console.log('testing global variables: ', gv.test);
gv.testFunc('Hello World');

// Mongoose Schema
var UserSchema = new Schema({
    username: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true},
    userType: {type: Number, default: 2},          //1: admin, 2: member - will defualt to 2, unless on admin log-in, then set to 1
    memberID : {type: Number, index: {unique:true}},

    // userType: {type: Number}, //1: admin, 2: member - Will be defined in the log-in screen - client side
    // memberID : {type: Number, index: {unique:true}},
    // medication : {type: Boolean}

});


// Called before adding a new user to the DB. Encrypts password.
UserSchema.pre('save', function(next) {
    var user = this;

    if(!user.isModified('password')) {
      return next();
    }
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err) {
          return next(err);
        }
        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) {
              return next(err);
            }
            //IF WE WERE TO CONSOLE LOG RIGHT MEOW, user.password would be 12345
            user.password = hash;
            next();
        });
    });
});

// Used by login methods to compare login form password to DB password
UserSchema.methods.comparePassword = function(candidatePassword, callback) {
    // 'this' here refers to this instance of the User model
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) {
          return callback(err);
        }
        callback(null, isMatch);
    });
};


module.exports = mongoose.model('User', UserSchema);
