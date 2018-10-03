'use strict'
//creando conexion ala db
var mongoose = require('mongoose'); //cargar o importar modulo mongoose
var app = require('./app'); //conf app express
var port = 3700;

var mongoDB = "mongodb://dealer:a123456@ds141128.mlab.com:41128/heroku_v3gsm1tz";

mongoose.connect(mongoDB, {
    useMongoClient: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));