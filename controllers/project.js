'use strict'

var Project = require('../models/project');
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


    saveProject: function (req, res) {
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) => {
            if(err) return res.status(500).send({message: 'an error has occured to save.'});

            if(!projectStored) return res.status(404).send({message: 'we coudnt save your project'});

            return res.status(200).send({project: projectStored});
        });

       /* return res.status(200).send({
            params: params,
            project: project,
            message: "saved project method"
        })*/
    },


    getProject: function (req, res) {
        var projectId = req.params.id;

        //id es opcional tenemos q hacer esta condicion
        if(projectId == null) return res.status(404).send({message: 'no existe el proyecto'});


        Project.findById(projectId, (err, project) => {
            if(err) return res.status(500).send({message: 'errir al devolver listado'});

            if(!project) return res.status(404).send({message: 'no existe el proyecto'});

            return res.status(200).send({
                project
            });

        });
    }

};


module.exports = controller;