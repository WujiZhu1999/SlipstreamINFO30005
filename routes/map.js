// /map folder
const express = require('express');

const mapRouter = express.Router();

const mapController = require("../controllers/map.js");

mapRouter.post('/:user/:origin/:destination', (req, res) => mapController.createMap(req, res));
mapRouter.get('/:user/:origin/:destination', (req, res) => mapController.getMapRoute(req, res));
mapRouter.delete("/:user/:origin/:destination", (req, res) => mapController.deleteRoute(req, res));
mapRouter.post("/:ser/:origin/:destination", (req, res) => mapController.changeMap(req, res));

module.exports = mapRouter;