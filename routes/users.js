const express = require('express');

const usersRouter = express.Router();

const usersController = require('../controllers/users.js');

const loginController = require('../controllers/login.js');

//Deletes a user specifed by the user's username
usersRouter.post(
	'/:userName/delete',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	(req, res) => usersController.deleteUser(req, res),
);

//Gets the user specified by it's username
usersRouter.get(
	'/:userName',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	(req, res) => usersController.getUser(req, res),
);

//Changes a users information using a post request
usersRouter.post(
	'/:userName',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	(req, res) => usersController.changeUser(req, res),
);

module.exports = usersRouter;
