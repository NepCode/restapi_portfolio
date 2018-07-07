'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar archivos rutas
var project_routes = require('./routes/project');

//middlewares
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

//CORS


//RUTAS
app.use('/api',project_routes);


/*app.get('/',(req,res) => {
    res.status(200).send(
         "<h1>hello world from api rest</h1>"
    );
});*/
/*app.post('/test/:id',(req,res) => {
    http://localhost:3700/test/88?web=www.tony.com
    console.log(req.body.nombre);
    console.log(req.body.apellidos);
    console.log(req.query.web); //recibe parametros por url peticion http
    console.log(req.params.id);
    res.status(200).send({
        message: "hello world from api rest"
    });
});*/


//exportar
module.exports = app;