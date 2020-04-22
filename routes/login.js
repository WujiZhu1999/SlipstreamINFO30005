const express = require("express");

const loginRouter = express.Router();

const loginController = require("../controllers/login.js");
const userController = require("../controllers/users.js");


loginRouter.get('/', (req, res) => loginController.getLogin(req, res));

loginRouter.post('/', (req, res) => loginController.logIn(req, res));

loginRouter.get("/register", (req, res) => loginController.register(res, req));

loginRouter.post("/register", (req, res) => userController.createUser(res, req));

//Check if we want this
loginRouter.post("/logout", (req, res) => loginController.logOut(req, res));

module.exports = loginRouter;