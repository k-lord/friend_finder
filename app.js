var express = require('express');
var path = require('path');
var logger = require('morgan');

var htmlRouter = require('./routes/html');
var apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', htmlRouter);
app.use('/api', apiRouter);

module.exports = app;
