const express = require("express");

const usersRouter = express.Router();

const usersController = require("../controllers/users.js");

usersRouter.get('/', (req, res) => usersController.createUser(req, res));

module.exports = usersRouter;
