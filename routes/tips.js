const express = require("express");

const tipsRouter = express.Router();

const tipsController = require("../controllers/tips.js");

tipsRouter.get("/", (req, res) => tipsController.getTips(req, res));

tipsRouter.get("/:tipNum", (req, res) => tipsController.getTip(req, res));

tipsRouter.post("/", (req, res) => tipsController.createTip(req, res));

tipsRouter.delete('/:tipNum', (req, res) => tipsController.deleteTip(req,res));

module.exports = tipsRouter;