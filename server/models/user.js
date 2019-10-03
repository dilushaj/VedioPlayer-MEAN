//User Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

//Create user schema
const Userschema = new Schema({
  UserId: {
    type: String,
    unique: true,
    required: true
  },
  UserName: String,
  Hash: String,
  Salt: String,
  UserType: String


}, { versionKey: false });

Userschema.methods.setPassword = function (password) { // getting the encrypted password from user password combining salt.
  this.Salt = crypto.randomBytes(16).toString('hex'); // generating unique salt
  this.Hash = crypto.pbkdf2Sync(password, this.Salt, 1000, 64, 'sha512').toString('hex');
};

Userschema.methods.validPassword = function (password) { // validating a given password
  var Hash = crypto.pbkdf2Sync(password, this.Salt, 1000, 64, 'sha512').toString('hex');
  return this.Hash === Hash;
};

Userschema.methods.generateJwt = function () { // create JWT token
  var expiry = new Date(); // today
  expiry.setDate(expiry.getDate() + 7); // set the expire time of the JWT token by one week

  return jwt.sign({
    _id:    this._id,
    UserId: this.UserId,
    UserName: this.UserName,
    exp: parseInt(expiry.getTime() / 1000),
  }, "SECRET");
};
//export User model
module.exports = mongoose.model('User', Userschema, 'Users');


