const express = require("express");

const usersRouter = express.Router();

const usersController = require("../controllers/users.js");

usersRouter.post('/', (req, res) => usersController.createUser(req, res));
usersRouter.delete('/:userName', (req, res) => usersController.deleteUser(req, res));
usersRouter.get('/:userName', (req, res) => usersController.getUser(req, res));
usersRouter.post('/:userName', (req, res) => usersController.changeUser(req, res));

module.exports = usersRouter;
