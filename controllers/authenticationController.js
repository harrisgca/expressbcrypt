var User = require('../models/User');

function signup(req, res) {
  var newUser = new User();
  newUser.email = req.body.email;
  newUser.password = req.body.password;

  newUser.save(function(err, dbResponse) {
    if (err) {
      console.log(err);
      res.send('something went wrong');
    } else {
      console.log('***************');
      console.log('user should have encrypted pasword');
      console.log('logged from authenticationController');
      console.log(dbResponse);
      res.send('user signed up');
    }
  }); //end newUser.save()
} //end signup()

function login(req, res) {
  console.log(req.body);
  var userParams = {
    email: req.body.email,
    password: req.body.password
  };

User.findOne({email:userParams.email},function(err,dbResponse){
  dbResponse.authenticate(userParams.password, function(err, isMatch) {
    if (err) throw err;
    if (isMatch) {
      res.send("Valid Credentials !");
    } else {
      res.send("the credentials provided do not correspond to a registered user");
    }
  });//end authenticate()
});

}//end login()

module.exports = {
  login: login,
  signup: signup
};
