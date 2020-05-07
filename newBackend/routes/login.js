const express = require("express");

const loginRouter = express.Router();

const loginController = require("../controllers/login.js");
const userController = require("../controllers/users.js");

//get the login page
loginRouter.get("/", (req, res) => loginController.getLogin(req, res));
loginRouter.delete("/", (req, res) => loginController.getLogin(req, res));

//send a log in request
loginRouter.post("/", async (req, res) => loginController.postLogIn(req, res));

//get the register page, where you make a new account
loginRouter.get("/register", (req, res) => loginController.getRegistration(req, res));

//create a new account
loginRouter.post("/register", async (req, res) => userController.createUser(req, res));

//send a log out request
loginRouter.post("/logout", (req, res) => loginController.postLogout(req, res));

//send a log out request
loginRouter.get("/logout", (req, res) => loginController.getLogout(req, res));

module.exports = loginRouter;