//   /  folder

const express = require("express");

const dashboardRouter = express.Router();

const authorController = require("../controllers/dashboard.js");

dashboardRouter.get('/', (req, res) => dashboardRouter.home(req, res));

module.exports = authorRouter;