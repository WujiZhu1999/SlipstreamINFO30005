const express = require('express');
const mapRouter = express.Router();
const mapController = require("../controllers/map.js");
const loginController = require("../controllers/login.js")

mapRouter.get('/', (req, res) => mapController.getMap(req, res));

mapRouter.post('/search', (req, res) => mapController.getRoute(req, res));

mapRouter.post('/start', (req, res, next) => loginController.isLoggedIn(req, res, next), (req,res)=> mapController.startRoute(req, res));

mapRouter.post('/halt', (req, res, next) => loginController.isLoggedIn(req, res, next), (req,res)=>mapController.haltRoute(req,res));
mapRouter.post('/end', (req, res, next) => loginController.isLoggedIn(req, res, next), (req,res)=>mapController.endRoute(req,res));

module.exports = mapRouter;