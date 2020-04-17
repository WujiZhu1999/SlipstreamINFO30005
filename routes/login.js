const express = require("express");

const loginRouter = express.Router();

const loginController = require("../controllers/login.js");

loginRouter.get('/', (req, res) => loginController.getLogin(req, res));

loginRouter.post('/', (req, res) => loginController.logIn(req, res));

module.exports = loginRouter;