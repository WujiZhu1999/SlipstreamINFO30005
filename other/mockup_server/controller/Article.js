const express = require('express');
const router = express.Router();
const ArticleModel = require('../model/Article');
const AgreeModel = require('../model/Agree');
const utils = require('../utils/utils');
const UserLogin = require('../middleware/userLogin');
router.get('/list', UserLogin, async (req, res, next) => {
	try {
		let { size, pageNo, ...query } = req.query;
		const result = await utils.QueryPage({ size, pageNo }, () => {
			const params = {};
			query = query || {};
			if (query.title) {
				params.title = new RegExp(query.title);
			}
			return ArticleModel.find(params).sort({ _id: -1 }).populate('user');
		});
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});
//查看用户创建的帖子
router.get('/list/byuser', UserLogin, async (req, res, next) => {
	try {
		const result = await ArticleModel.find({
			user: req.session.user._id,
		}).sort({ _id: -1 });

		res.status(200).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/info', UserLogin, async (req, res, next) => {
	try {
		let { _id } = req.query;
		const result = await ArticleModel.findOne({ _id }).populate('user');
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});

//用户删除自己发帖
router.get('/delete', UserLogin, async (req, res, next) => {
	try {
		let { _id } = req.query;
		const result = await ArticleModel.remove({ _id });
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});

//用户创建帖子
router.post('/create', UserLogin, async (req, res, next) => {
	try {
		let body = req.body;
		let user = req.session.user;
		body.user = user._id;
		const result = await ArticleModel.create(body);
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});

//用户更新帖子
router.post('/update', UserLogin, async (req, res, next) => {
	try {
		let { _id, update } = req.body;
		if (!_id) {
			return res.status(200).json({});
		}
		delete update.agreeNum;
		delete update.user;
		delete update.commentNum;
		const result = await ArticleModel.update(
			{
				_id,
			},
			update,
		);
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});
//点赞帖子
router.post('/agree', UserLogin, async (req, res, next) => {
	try {
		let { articleId } = req.body;
		let userId = req.session.user._id;
		const agree = await AgreeModel.findOne({
			articleId,
			userId,
		});
		await agree.update({
			isAgree: !!!agree.isAgree,
		});
		await ArticleModel.update(
			{ _id: articleId },
			{
				$inc: {
					agreeNum: !!!agree.isAgree ? 1 : -1,
				},
			},
		);
		res.status(200).json({});
	} catch (error) {
		res.status(500).json(error);
	}
});
module.exports = router;
