// Dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// Create instance of express application

var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT);