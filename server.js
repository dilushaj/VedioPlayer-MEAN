const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var passport = require('passport');


// API file for interacting with MongoDB
const api = require('./server/routes/api');
// Passport config
require('./server/config/passport');
//Set Port
const port = '3000';

//create express server
const app = express();


// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Body Parsers Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


// API location
app.use('/api', api);

// app.get('/admin', (req, res) => {
//   res.sendFile(path.join(__dirname, 'src/app/admin-page/admin-page.component.html'));
// });


// default route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function(){
  console.log(" Server Running on localhost: "+ port)});

// error handlers

// [SH] Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

module.exports = app;


















