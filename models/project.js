'use strict'

var mongoose = require('mongoose'); //se encarga de trabajar con los modelos
var Schema = mongoose.Schema; //para crear esquema de project

var ProjectSchema = Schema({//paso como parametro un objeto json con toda slas propiedades
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

module.exports = mongoose.model('Project',ProjectSchema);
// projects -> save docs in that collection