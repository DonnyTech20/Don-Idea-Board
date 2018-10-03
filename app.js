//  IMPORTING DEPENDENIES
require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//IF THE ONNCEION TRHOW AND EROR

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//INSTANTIATING EXPRESS AND ADDING MIDDLEWARE
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/')));

// TOUTES
app.get('/', (req, res) => {
  res.sendFile(${_dirname}/client/build/index.html`)
})

module.exports = app;
