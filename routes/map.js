const express = require('express');
const mapRouter = express.Router();
const mapController = require("../controllers/map.js");
var loginChecker = require("../controllers/login.js");

//Tony

//username is req.session.user

//funtion that finished a route and marks update the URLSearchParams, and the route by adding the date to completions

//finished the route

//Author: Thy Le
//Student Numbe : 980822
mapRouter.get('/', (req, res) => mapController.getMap(req, res));
mapRouter.post('/', (req, res) => mapController.createRoute(req, res));

mapRouter.get('/route', (req, res) => mapController.getRoute(req, res));
mapRouter.delete("/route",  (req, res) => mapController.deleteRoute(req, res));
mapRouter.post("/route", (req, res) => mapController.changeRoute(req, res));


//LUC
//finish and update
mapRouter.post('/finish', (req, res) =>mapController.finishRoute(req,res));

module.exports = mapRouter;