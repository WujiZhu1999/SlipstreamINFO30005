//   /forum  folder

const express = require("express");

const forumRouter = express.Router();

const forumController = require("../controllers/forum.js");

forumRouter.get('/', (req, res) => forumController.getForum(req, res));

forumRouter.get("/:articleNum", (req, res) => forumController.getArticle(req, res));

forumRouter.get('/', (req, res) => forumController.createArticle(req, res));

forumRouter.delete('/', (req, res) => forumController.delteForum(req,res));

module.exports = forumRouter;
