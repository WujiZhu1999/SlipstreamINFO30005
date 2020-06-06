const express = require('express');
const mapRouter = express.Router();
const mapController = require('../controllers/map.js');
const loginController = require('../controllers/login.js');

mapRouter.get(
	'/',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => mapController.localRoute(req, res),
);
//mapRouter.get('/', (req, res) => mapController.initialMap(req, res));
mapRouter.post(
	'/route',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => mapController.mapPlan(req, res),
);

mapRouter.post(
	'/saveRoute',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => mapController.saveRoute(req, res),
);
mapRouter.post(
	'/deleteRoute',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => mapController.deleteRoute(req, res),
);

mapRouter.post(
	'/start',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	(req, res) => mapController.startRoute(req, res),
);

mapRouter.post(
	'/halt',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	(req, res) => mapController.haltRoute(req, res),
);
mapRouter.post(
	'/end',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	(req, res) => mapController.endRoute(req, res),
);

module.exports = mapRouter;
