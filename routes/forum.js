//   /forum  folder

const express = require("express");

const forumRouter = epxress.Router();

const forumController = require("../controllers/forum.js");

forumRouter.get('/', (req, res) => forumController.getForums(req, res));

forumRouter.get("/:articleName", (req, res) => forumController.getArticle(req, res));

module.exports = forumnRouter;
