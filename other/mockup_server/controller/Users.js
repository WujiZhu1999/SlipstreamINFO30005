const express = require("express");
const router = express.Router();
const UsersModel = require("../model/Users");
const FriendModel = require("../model/Friend");
const UserLogin = require("../middleware/userLogin")
//注册
router.post("/register", async (req, res, next) => {
  try {
    const data = req.body;
    const find = await UsersModel.findOne({
      userName: data.userName
    });
    if (!find) {
      const result = await UsersModel.create(data);
      res.status(200).json(result);
      return;
    }
    res.status(417).json({
      code: 417,
      message: "The account already exists!"
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//关注
router.post("/follow", UserLogin, async (req, res, next) => {
  try {
    const data = req.body;
    await FriendModel.create({
      me: data.me,
      friend: data.friend
    });
    res.status(200).json({});
  } catch (error) {
    res.status(500).json(error);
  }
});
//取消关注
router.post("/follow/remove", UserLogin, async (req, res, next) => {
  try {
    const data = req.body;
    await FriendModel.remove({
      me: data.me,
      friend: data.friend
    });
    res.status(200).json({});
  } catch (error) {
    res.status(500).json(error);
  }
});
//我关注的 我的粉丝
router.post("/fans", UserLogin, async (req, res, next) => {
  try {
    const data = req.body;
    const followList = await FriendModel.find({
      me: data.me
    });
    const fansList = await FriendModel.find({
      friend: data.me
    });
    res.status(200).json({
      followTotal: followList.length,
      fansTotal: fansList.length,
      followList,
      fansList
    });
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
