//   /forum  folder

const express = require("express");

const forumRouter = express.Router();

const forumController = require("../controllers/forum.js");

forumRouter.get('/', (req, res) => forumController.getForum(req, res));

forumRouter.get("/:articleName", (req, res) => forumController.getArticle(req, res));

module.exports = forumRouter;
