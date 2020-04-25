// /map folder
const express = require('express');

const mapRouter = express.Router();

const mapController = require("../controllers/map.js");

mapRouter.get('/info', (req, res) => mapController.getMap(req, res));
mapRouter.get('/', (req, res) => mapController.getRoute(req, res));
mapRouter.delete("/", (req, res) => mapController.deleteRoute(req, res));
mapRouter.post("/", (req, res) => mapController.changeRoute(req, res));
///route?origin={origin}&destination={destination}
module.exports = mapRouter;