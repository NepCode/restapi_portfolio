'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar archivos rutas

//middlewares
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

//CORS


//RUTAS
app.get('/',(req,res) => {
    res.status(200).send(
         "<h1>hello world from api rest</h1>"
    );
});

app.post('/test',(req,res) => {
    res.status(200).send({
        message: "hello world from api rest"
    });
});


//exportar
module.exports = app;