const express = require("express");

const tipsRouter = express.Router();

const tipsController = require("../controllers/tips.js");

//Geting all the tips titles
tipsRouter.get("/", async (req, res) => tipsController.getTips(req, res));

//Geting a specific tip based on the tip number
tipsRouter.get("/:tipNum", async (req, res) => tipsController.getTip(req, res));

module.exports = tipsRouter;