//Routes all features to do with the interactive forum
//Author: Chloe Thai
//Student Numbe : 995204

const express = require("express");

const forumRouter = express.Router();

const forumController = require("../controllers/forum.js");

//gets the forum (titles of all the acticles)
forumRouter.get('/', (req, res) => forumController.getForum(req, res));

//gets an article according tot he number
forumRouter.get("/:articleNum", (req, res) => forumController.getArticle(req, res));

//creates an article with a post request
forumRouter.post('/', (req, res) => forumController.createArticle(req, res));

//delete and article based off of the article number number
forumRouter.delete('/:articleNum', (req, res) => forumController.deleteArticle(req,res));

//changes an article using a post request and specifies the article with an rticle number
forumRouter.post('/:articleNum', (req, res) => forumController.changeArticle(req,res));

module.exports = forumRouter;
