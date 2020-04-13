// /map folder
const express = require('express');

const mapRouter = express.Router();

const mapController = require("../controllers/map.js");

mapRouter.get('/', (req, res) => mapController.getMap(req, res));

mapRouter.get("/route", (req, res) => mapController.getMapRoute(req, res));

module.exports = mapRouter;

