//REST API to communicate with mongodb
const express = require('express');
const passport = require('passport');
const router = express.Router();
const mongoose = require('mongoose');
const Vedio = require("../models/vedio");
const User = require("../models/user");
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'SECRET',
  userProperty: 'payload'
});



// require("../config/passport");
var authCtrl= require("../contraller/authentication");
var db = "mongodb://admindilusha:dilusha95@ds237808.mlab.com:37808/vedioplayer?authSource=vedioplayer&w=1 ";
mongoose.connect(db, function(err){
  if(err){
    console.error("Error! " + err);
  }
});


//SELECT all vedios

router.get('/vedios', function (req, res) {
    console.log("Get request for all vedios");
    Vedio.find({})
      .exec(function (err, vedios) {
        if (err) {
          console.log("Error Retrieving vedios");
        } else {
          res.json(vedios);
        }
      });

  });




//SELECT a vedio
router.get('/vedios/:id', function (req, res) {
  console.log("Get request for a vedio");
  Vedio.findById(req.params.id)
    .exec(function (err, vedio) {
      if (err) {
        console.log("Error Retrieving vedio");
      } else {
        res.json(vedio);
      }
    });
});

//INSERT a vedio
router.post('/vedio', function (req, res) {
  console.log("Post a  vedio");
  var newVedio = new Vedio();
  newVedio.title = req.body.title;
  newVedio.url = req.body.url;
  newVedio.description = req.body.description;
  newVedio.save(function (err, insertedVedio) {
    if (err) {
      console.log("Error Saving vedio");
    } else {
      res.json(insertedVedio);
    }
  });
});

//UPDATE a vedio
router.put('/vedio/:id', function (req, res) {
  console.log('Update a vedio');
  Vedio.findByIdAndUpdate(req.params.id,
    {
      $set: {title: req.body.title, url: req.body.url, description: req.body.description}
    },
    {
      new: true
    },
    function (err, updatedVedio) {//if new true: returns the updated vedio, if new fasle: return the original vedio
      if (err) {
        res.send("Error Updating Vedio");
      } else {
        res.json(updatedVedio);
      }
    }
  )
});

//DELETE a vedio
router.delete('/vedio/:id', function(req, res) {
  console.log("Deleting a vedio");
  Vedio.findByIdAndRemove(req.params.id, function(err, deletedVedio) {
    if (err){
      res.send("Error deleting Vedio");
    } else {
      res.json(deletedVedio);
    }
  })
});


//Select all current users
router.get('/users', function(req, res){
  console.log("Select all users");
  User.find({})
    .exec(function (err, users) {
      if (err) {
        console.log("Error Retrieving users");
      } else {
        res.json(users);
      }
    });
});

// User Authenticate
router.post('/login', authCtrl.login);

//User Registration
router.post('/register', authCtrl.register);



router.get('/login/:id', function (req, res) {
  console.log("Get request for a User");
  User.findById(req.params.id)
    .exec(function (err, user) {
      if (err) {
        console.log("Error Retrieving user");
      } else {
        res.json(user);
      }
    });
});

router.get('/admin', function (req, res) {
  console.log("Get request for all adminvedios");
  Vedio.find({})
    .exec(function (err, vedios) {
      if (err) {
        console.log("Error Retrieving vedios");
      } else {
        res.json(vedios);
      }
    });

});

module.exports = router;

