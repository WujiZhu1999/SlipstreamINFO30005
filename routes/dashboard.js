//   /  folder

const express = require("express");

const dashboardRouter = express.Router();

const dashboardController = require("../controllers/dashboard.js");

const loginController = require("../controllers/login.js");

dashboardRouter.get("/", (req, res, next) => loginController.isLoggedIn(req, res, next), async (req, res) => dashboardController.getHomepage(req, res));

//dashboardRouter.get("/", (req,res) => dashboardController.getLeaderboard(req,res));

module.exports = dashboardRouter;