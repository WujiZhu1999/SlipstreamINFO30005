
const express = require("express");

const friendsRouter = express.Router();

const friendsController = require("../controllers/friends.js");

friendsRouter.get('/', (req, res) => friendsController.getFriendRequests(req, res));

friendsRouter.post('/:userName', (req, res) => friendsController.sendFriendRequest(req, res));

module.exports = friendsRouter;