'use strict'

var controller = {
    home: function (req,res) {
        res.status(200).send({
           message: 'I´m home'
        });
    },

    test: function (req,res) {
        return res.status(200).send({
           message: "soy el metodo accion test del controlador de project"
        });
    },


    saveProject

};


module.exports = controller;