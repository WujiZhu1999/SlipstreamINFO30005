const express = require("express");

const tipsRouter = express.Router();

const authorController = require("../controllers/tips.js");

tipsRouter.get('/', (req, res) => tipsController.getTips(req, res));

tipsRouter.get("/:tipName", (req, res) => tipsController.getTip(req, res));

module.exports = tipsRouter;