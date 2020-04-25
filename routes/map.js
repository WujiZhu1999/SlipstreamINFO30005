// /map folder
const express = require('express');

const mapRouter = express.Router();

const mapController = require("../controllers/map.js");

<<<<<<< HEAD
mapRouter.get('/info', (req, res) => mapController.getMap(req, res));
mapRouter.get('/', (req, res) => mapController.getRoute(req, res));
mapRouter.delete("/", (req, res) => mapController.deleteRoute(req, res));
mapRouter.post("/", (req, res) => mapController.changeRoute(req, res));
=======
var loginChecker = require("../controllers/login.js");



//Tony

//username is req.session.user

//funtion that finished a route and marks update the URLSearchParams, and the route by adding the date to completions

//finished the route


//change this req.param.origin
//to this req.body.origin

//Alice bellow this

//creates the route
mapRouter.get('route', (req, res) => mapController.getMapRoute(req, res));
mapRouter.post('route', (req, res) => mapController.createMap(req, res));
mapRouter.get('/', (req, res) => mapController.getMap(req, res));  //jut a blank page for now, should say "Map"



//LUC
//finish the route and update personal record.
//mapRouter.post('/finish', (req, res, next) =>loginChecker.isLoggedIn(req, res, next), (req, res) =>mapController.finishRoute(req,res));

//For this parse we won't check to login everywhere. So we will skip check login
mapRouter.post('/finish', (req, res) =>mapController.finishRoute(req,res));

//deletes the route
mapRouter.delete("route", (req, res) => mapController.deleteRoute(req, res));
//mapRouter.post("/:origin/:destination", (req, res) => mapController.changeMap(req, res));

>>>>>>> c755a255da386467828af40f08be9647c9d0e2cd
module.exports = mapRouter;
