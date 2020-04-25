const express = require("express");

const loginRouter = express.Router();

const loginController = require("../controllers/login.js");
const userController = require("../controllers/users.js");

//get the login page
loginRouter.get("/", (req, res) => loginController.getLogin(req, res));

//send a log in request
loginRouter.post("/", (req, res) => loginController.logIn(req, res));

//get the register page, where you make a new account
loginRouter.get("/register", (req, res) => loginController.register(res, req));

//create a new account
loginRouter.post("/register", (req, res) => userController.createUser(res, req));

//send a log out request
loginRouter.post("/logout", (req, res) => loginController.logOut(req, res));

module.exports = loginRouter;