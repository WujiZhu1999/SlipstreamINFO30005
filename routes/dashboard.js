//   /  folder

const express = require("express");

const dashboardRouter = express.Router();

const dashboardController = require("../controllers/dashboard.js");

dashboardRouter.get('/', (req, res) => dashboardController.home(req, res));

module.exports = dashboardRouter;