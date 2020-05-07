const express = require("express");
const friendsRouter = express.Router();
const friendsController = require("../controllers/friends.js");
const loginController = require("../controllers/login.js");

//get your list of friends
friendsRouter.get("/", (req, res, next) => loginController.isLoggedIn(req, res, next), async (req,res) => friendsController.getFriends(req,res));

//send a new friend reqest, or accept a friend request already send to you
friendsRouter.post("/:userName", (req, res, next) => loginController.isLoggedIn(req, res, next), (req, res) => friendsController.sendFriendRequest(req, res));
friendsRouter.post("/deal", (req, res, next) => loginController.isLoggedIn(req, res, next), async (req,res)=> friendsController.dealFriendRequest(req,res));
friendsRouter.delete("/:userName", (req, res, next) => loginController.isLoggedIn(req, res, next), async (req, res)=> friendsController.deleteFriendRequest(req,res));
module.exports = friendsRouter;