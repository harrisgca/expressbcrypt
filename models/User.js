var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
});

UserSchema.pre('save', function(next) {
  // the first arguments corresponds to the number of "salting rounds that will be applied"
  var self = this;
  var userSubmittedPassword = self.password;
  console.log("*************");
  console.log('unencrypted password');
  console.log('logged from User.js');
  console.log(this);
  bcrypt.genSalt(5, function(err, salt) {
    //now we use the salt generated
    bcrypt.hash(userSubmittedPassword, salt, function(err, hash) {
      // the method hash will return the password hashed with the salt, we replace the original password attribute with the hashed one
      self.password = hash;
      next();
    });
  });
});

UserSchema.methods.glenn = function(){
  console.log('hello glenn');
};

UserSchema.methods.authenticate = function(password, callback) {
  // compare is a bcrypt method that will return a boolean if the first argument once encrypted corresponds to the second argument
  bcrypt.compare(password, this.password, function(err, isMatch) {
      callback(null, isMatch);
  });
};
module.exports = mongoose.model('User', UserSchema);
