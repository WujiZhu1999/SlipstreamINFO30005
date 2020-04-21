const express = require("express");

const usersRouter = express.Router();

const usersController = require("../controllers/users.js");
const loginController = require("../controllers/login.js");

//Creates a user using a post request
usersRouter.post('/', (req, res) => usersController.createUser(req, res));

//Deletes a user specifed by the user's username
usersRouter.delete("/:userName", (req, res) => usersController.deleteUser(req, res));

//Gets the user specified by it's username
usersRouter.get("/:userName", (req, res) => usersController.getUser(req, res));

//Changes a users information using a post request
usersRouter.post("/:userName", (req, res) => usersController.changeUser(req, res));

module.exports = usersRouter;
