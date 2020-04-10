const express = require("express");
const router = express.Router();
const CommentModel = require("../model/Comment");
const ArticleModel = require("../model/Article");
const utils = require("../utils/utils");
const UserLogin = require("../middleware/userLogin")
//查看评论
router.get("/list", UserLogin, async (req, res, next) => {
  try {
    let query = req.query;
    const result = await CommentModel.find({ article: query.article }).sort({ _id: -1 }).populate("user");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

//删除评论
router.get("/delete", UserLogin, async (req, res, next) => {
  try {
    let { _id, article } = req.query;
    const result = await CommentModel.remove({ _id })
    await ArticleModel.update({ _id: article }, {
      $inc: {
        commentNum: -1
      }
    })
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

//用户创建评论
router.post("/create", UserLogin, async (req, res, next) => {
  try {
    let body = req.body;
    let user = req.session.user
    const result = await CommentModel.create({
      user: user._id, //发布用户
      article: body.article,
      content: body.content //内容
    })
    await ArticleModel.update({ _id: body.article }, {
      $inc: {
        commentNum: 1
      }
    })
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
