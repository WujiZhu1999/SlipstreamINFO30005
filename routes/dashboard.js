//   /  folder

const express = require("express");

const dashboardRouter = express.Router();

const dashboardController = require("../controllers/dashboard.js");

dashboardRouter.get("/", (req, res) => dashboardController.home(req, res));

//dashboardRouter.get("/", (req,res) => dashboardController.getLeaderboard(req,res));

module.exports = dashboardRouter;