'use strict'
//fichero de configuracion de las rutas del controlado projec
var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();


router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject()); //route to save project
router.get('/project/:id?', ProjectController.getProject()); //route to get any project parametro ? es oopcional

module.exports = router;