const express = require("express");

const tipsRouter = express.Router();

const tipsController = require("../controllers/tips.js");

tipsRouter.get('/', (req, res) => tipsController.getTips(req, res));

tipsRouter.get("/:tipNum", (req, res) => tipsController.getTip(req, res));

module.exports = tipsRouter;