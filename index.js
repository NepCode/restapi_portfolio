'use strict'
//creando conexion ala db
var mongoose = require('mongoose'); //cargar o importar modulo mongoose
var app = require('./app'); //conf app express
var port = 3700;

mongoose.Promise = global.Promise; // realizar conexion con una promesa
mongoose.connect('mongodb://dealer:a123456@ds141128.mlab.com:41128/heroku_v3gsm1tz' || 'mongodb://localhost:27017/portafolio', { useNewUrlParser: true })
    .then(() => { //comprobar si me he conectado al db
        console.log("DB connection successfully established...");

        //creacion del servidor
        app.listen(port, () => {
            console.log("servidor corriendo correctamente en la url: localhost:3700");
        });
    })
    .catch(err => console.log(err));