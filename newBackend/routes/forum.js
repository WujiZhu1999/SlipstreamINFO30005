const express = require('express');

const forumRouter = express.Router();

const forumController = require('../controllers/forum.js');
const loginController = require('../controllers/login.js');

//gets the forum (titles of all the acticles)
forumRouter.get(
	'/',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => forumController.getForum(req, res),
);

//gets an article according tot he number
forumRouter.get(
	'/:articleNum',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => forumController.getArticle(req, res),
);

//creates an article with a post request
forumRouter.post(
	'/',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => forumController.createArticle(req, res),
);

//delete and article based off of the article number number
forumRouter.delete(
	'/:articleNum',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => forumController.deleteArticle(req, res),
);

//changes an article using a post request and specifies the article with an rticle number
forumRouter.post(
	'/edit',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => forumController.changeArticle(req, res),
);
//creates a new comment
forumRouter.post(
	'/comment',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => forumController.createComment(req, res),
);

//deletes a comment
forumRouter.delete(
	'/:articleNum/:commentNum',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => forumController.deleteComment(req, res),
);

//edits a comment
forumRouter.post(
	'/editOld',
	(req, res, next) => loginController.isLoggedIn(req, res, next),
	async (req, res) => forumController.changeComment(req, res),
);

module.exports = forumRouter;
