const express = require('express');

const tipsRouter = express.Router();

const tipsController = require('../controllers/tips.js');

const loginController = require('../controllers/login.js');
//Geting all the tips titles
tipsRouter.get(
	'/',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => tipsController.getTips(req, res),
);

//Geting a specific tip based on the tip number
//tipsRouter.get("/:tipNum", (req, res, next) => loginController.isLoggedIn(req, res, next), async (req, res) => tipsController.getTip(req, res));

module.exports = tipsRouter;
