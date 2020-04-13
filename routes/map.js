// /map folder
const express = require('express');

const mapRouter = express.Router();

const mapController = require("../controllers/mapController.js");

mapRouter.get('/', (req, res) => mapController.getMap(req, res));

mapRouter.post("/route", (req, res) => mapController.postMapRoute(req, res));

module.exports = mapRouter;

