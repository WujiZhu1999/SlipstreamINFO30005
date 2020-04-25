const express = require('express');
const mapRouter = express.Router();
const mapController = require("../controllers/map.js");
<<<<<<< HEAD
=======

mapRouter.get('/info', (req, res) => mapController.getMap(req, res));
mapRouter.get('/', (req, res) => mapController.getRoute(req, res));
mapRouter.delete("/", (req, res) => mapController.deleteRoute(req, res));
mapRouter.post("/", (req, res) => mapController.changeRoute(req, res));
>>>>>>> 9e0bb2d7dce57410b58912582d724c34db8b419c
var loginChecker = require("../controllers/login.js");

//Tony

//username is req.session.user

//funtion that finished a route and marks update the URLSearchParams, and the route by adding the date to completions

//finished the route

//Author: Thy Le
//Student Numbe : 980822
mapRouter.get('/', (req, res, next) =>loginChecker.isLoggedIn(req, res, next), (req, res) => mapController.getMap(req, res));
mapRouter.post('/', (req, res, next) =>loginChecker.isLoggedIn(req, res, next), (req, res) => mapController.createRoute(req, res));

mapRouter.get('/route', (req, res, next) =>loginChecker.isLoggedIn(req, res, next), (req, res) => mapController.getRoute(req, res));
mapRouter.delete("/route",  (req, res, next) =>loginChecker.isLoggedIn(req, res, next),  (req, res) => mapController.deleteRoute(req, res));
mapRouter.post("/route", (req, res, next) =>loginChecker.isLoggedIn(req, res, next), (req, res) => mapController.changeRoute(req, res));


//LUC
//finish and update
mapRouter.post('/finish', (req, res, next) =>loginChecker.isLoggedIn(req, res, next), (req, res) =>mapController.finishRoute(req,res));

module.exports = mapRouter;