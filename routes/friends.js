
const express = require("express");

const friendsRouter = express.Router();

const friendsController = require("../controllers/friends.js");

//get your list of friends
friendsRouter.get('/', (req, res) => friendsController.getFriendRequests(req, res));

//send a new friend reqest, or accept a friend request already send to you
friendsRouter.post('/:userName', (req, res) => friendsController.sendFriendRequest(req, res));

module.exports = friendsRouter;