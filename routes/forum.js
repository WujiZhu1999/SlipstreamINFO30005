//Routes all features to do with the interactive forum
//Author: Chloe Thai
//Student Numbe : 995204

const express = require("express");

const forumRouter = express.Router();

const forumController = require("../controllers/forum.js");
const loginController = require("../controllers/login.js");

//gets the forum (titles of all the acticles)
forumRouter.get("/", (req, res, next) => loginController.isLoggedIn(req, res, next), (req, res) => forumController.getForum(req, res));

//gets an article according tot he number
forumRouter.get("/:articleNum", (req, res, next) => loginController.isLoggedIn(req, res, next), (req, res) => forumController.getArticle(req, res));

//creates an article with a post request
forumRouter.post("/", (req, res, next) => loginController.isLoggedIn(req, res, next), (req, res) => forumController.createArticle(req, res));

//delete and article based off of the article number number
forumRouter.post("/:articleNum/delete", (req, res, next) => loginController.isLoggedIn(req, res, next), (req, res) => forumController.deleteArticle(req,res));

//get article to edit
forumRouter.get("/:articleNum/edit", (req, res, next) => loginController.isLoggedIn(req, res, next), (req, res) => forumController.getEditArticle(req, res));

//changes an article using a post request and specifies the article with an rticle number
forumRouter.post("/:articleNum/edit", (req, res, next) => loginController.isLoggedIn(req, res, next), (req, res) => forumController.changeArticle(req,res));

//creates a new comment
forumRouter.post("/:articleNum", (req, res, next) => loginController.isLoggedIn(req, res, next),(req, res) => forumController.createComment(req,res))

//deletes a comment
forumRouter.post("/:articleNum/:commentNumber/delete", (req, res, next) => loginController.isLoggedIn(req, res, next), (req, res) => forumController.deleteComment(req,res));

//get page to edit comment 
forumRouter.get("/:articleNum/:commentNumber/edit" , (req, res, next)   => loginController.isLoggedIn(req, res, next), (req, res) => forumController.getEditComment(req,res));

//edits a comment
forumRouter.post("/:articleNum/:commentNumber/edit", (req, res, next) => loginController.isLoggedIn(req, res, next), (req, res) => forumController.changeComment(req,res));

module.exports = forumRouter;
