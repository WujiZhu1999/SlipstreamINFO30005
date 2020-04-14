const express = require("express");

const usersRouter = express.Router();

const usersController = require("../controllers/users.js");

usersRouter.post('/', (req, res) => usersController.createUser(req, res));

module.exports = usersRouter;
