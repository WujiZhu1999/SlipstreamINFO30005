const express = require('express');
const friendsRouter = express.Router();
const friendsController = require('../controllers/friends.js');
const loginController = require('../controllers/login.js');

friendsRouter.get(
	'/',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => friendsController.getFriends(req, res),
);
friendsRouter.get(
	'/request',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => friendsController.getFriendRequests(req, res),
);
friendsRouter.post(
	'/add',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => friendsController.sendFriendRequest(req, res),
);
friendsRouter.post(
	'/deal',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => friendsController.dealFriendRequest(req, res),
);
friendsRouter.delete(
	'/:friend',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => friendsController.deleteFriendRequest(req, res),
);
module.exports = friendsRouter;
