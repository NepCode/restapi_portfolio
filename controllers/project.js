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

        //prueba postman
       /* return res.status(200).send({
            params: params,
            project: project,
            message: "saved project method"
        })*/
    },

    getProject: function (req, res) {
        var projectId = req.params.id;

        //id es opcional tenemos q hacer esta condicion
        if(projectId == null) return res.status(404).send({message: 'no existe el proyecto asd'});


        Project.findById(projectId, (err, project) => {
            if(err) return res.status(500).send({message: 'errir al devolver los datos'});

            if(!project) return res.status(404).send({message: 'no existe el proyecto'});

            return res.status(200).send({
                project
            });

        });
    },

    getProjects: function (req, res) {

        //Project.find({year:2019});
        //Project.find({}).sort('year');
        //Project.find({}).sort('+year');
        //Project.find({}).sort('-year');
        Project.find({}).exec((err,projects) => {

            if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

            if(!projects) return res.status(404).send({message: 'No hay proyectos para mostrar'});

            return res.status(200).send(projects);
        });


    },

    updateProject: function (req, res) {

        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update,{new:true}, (err, projectUpdated) => {
            if(err) return res.status(500).send({message: 'error al actualizar'});

            if(!projectUpdated) return res.status(404).send({message: 'we couldnt update your project, it doesn exist'});

            return res.status(200).send({project: projectUpdated});
        });
    },

    deleteProject: function (req,res) {
        var projectId = req.params.id;

        Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
           if(err) return res.status(500).send({message: 'no se ha podido eliminar'});

           if(!projectRemoved) return res.status(404).send({message: 'no se puede eliminar'});

           return res.status(200).send({project: projectRemoved});
        });
    },

    uploadImage: function (req,res) {
        var projectId = req.params.id;
        var fileName = 'Imagen no subida...';

        if(req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];

            Project.findByIdAndUpdate(projectId, {image: fileName},{new:true} , (err, projectUpdated) => {
                if(err) return res.status(500).send({message: 'la imagen no se ha subido'});

                if(!projectUpdated) return res.status(404).send({message: 'we couldnt update your image project, it doesn exist, image hasnt uploaded'});

                return res.status(200).send({
                    //files: req.files
                    project : projectUpdated
                });
            });

        }else{
            return res.status(200).send({
                message: fileName
            });
        }
    }

};


module.exports = controller;