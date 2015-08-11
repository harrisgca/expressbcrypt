var User = require('../models/User');

function getIndex(req, res) {
  res.send('Index page babay!');
}

function newUser(req,res){
  res.render('./users/new',{});
}

function login(req,res){
  console.log(User);
  res.render('./users/login',{});
}

module.exports = {
  getIndex: getIndex,
  newUser : newUser,
  login: login
};
