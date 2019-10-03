var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports.register =  function (req, res) {
  console.log("Post a  new user");
  var newUser = new User();
  newUser.UserId = req.body.UserId;
  newUser.UserName = req.body.UserName;
  newUser.setPassword(req.body.Password);
  newUser.UserType="subAdmin";
  newUser.save(function (err) {
    var token;
    token = newUser.generateJwt();
    if (err) {
      console.log("Error Saving vedio");
    } else {
      res.json({
        "token": token
      });
    }
  });
};

module.exports.login = function(req, res) {
  console.log('api works');
  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};
