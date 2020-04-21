const express = require("express");

const loginRouter = express.Router();

const loginController = require("../controllers/login.js");

loginRouter.get('/', (req, res) => loginController.getLogin(req, res));

loginRouter.post('/', (req, res) => loginController.logIn(req, res));

//Check if we want this
loginRouter.post('/logout', (req, res) => loginController.logOut(req, res));

module.exports = loginRouter;