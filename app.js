'use strict'
//express tener sistemas de rutas, configuracion express y las peticiones
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar archivos rutas
var project_routes = require('./routes/project');

//middlewares
app.use(bodyParser.urlencoded({ extend: false })); //conf necesaria para bodyparse
app.use(bodyParser.json()); //todo lo que llegue se convierte en json

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //* PUT YOUR URL
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//RUTAS
app.use('/api', project_routes);


/*app.get('/',(req,res) => {
    res.status(200).send(
         "<h1>hello world from api rest</h1>"
    );
});*/
/*app.post('/test/:id',(req,res) => {
    http://localhost:3700/test/88?web=www.tony.com
    console.log(req.body.nombre);
    console.log(req.body.apellidos); //recibe parametrod enviaddos por el body
    console.log(req.query.web); //recibe parametros por url peticion http
    console.log(req.params.id);
    res.status(200).send({
        message: "hello world from api rest nodejs"
    });
});*/


//exportar
module.exports = app;