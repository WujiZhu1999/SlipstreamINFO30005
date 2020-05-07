const express = require("express");

const tipsRouter = express.Router();

const tipsController = require("../controllers/tips.js");

//Geting all the tips titles
tipsRouter.get("/", async (req, res) => tipsController.getTips(req, res));

//Geting a specific tip based on the tip number
tipsRouter.get("/:tipNum", async (req, res) => tipsController.getTip(req, res));

//Creates a new tip using a post request
tipsRouter.post("/", async (req, res) => tipsController.createTip(req, res));

//Deletes a tip specifed by a tip number 
tipsRouter.delete("/:tipNum", async (req, res) => tipsController.deleteTip(req,res));

module.exports = tipsRouter;