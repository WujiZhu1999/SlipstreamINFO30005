const express = require("express");

const tipsRouter = express.Router();

const tipsController = require("../controllers/tips.js");

tipsRouter.get('/', (req, res) => tipsController.getTips(req, res));

tipsRouter.post("/:tipNum", (req, res) => tipsController.deleteTip(req, res));

module.exports = tipsRouter;