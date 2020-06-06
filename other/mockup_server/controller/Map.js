const express = require('express');
const router = express.Router();
const axios = require('axios');
const RouteModel = require('../model/Route');
const FriendModel = require('../model/Friend');
const UsersModel = require('../model/Users');
const UserLogin = require('../middleware/userLogin');
//查询两个位置的路线
router.get('/directions', UserLogin, async (req, res, next) => {
	try {
		const { data } = await axios({
			url: `https://maps.googleapis.com/maps/api/directions/json?origin=${req.query.origin}&destination=${req.query.destination}&key=${req.query.key}&region=${req.query.region}`,
		});
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json(error);
	}
});

//开始骑行
router.post('/riding', UserLogin, async (req, res, next) => {
	try {
		await RouteModel.create(req.body);
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json(error);
	}
});

//结束骑行
router.post('/riding/stop', UserLogin, async (req, res, next) => {
	try {
		await RouteModel.update({ _id: req.body._id }, { status: 1 });
		res.status(200).json({});
	} catch (error) {
		res.status(500).json(error);
	}
});

//查询当前的骑行
router.post('/riding/underway', UserLogin, async (req, res, next) => {
	try {
		const result = await RouteModel.findOne({
			user: req.session.user._id,
			status: 0,
		});
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});

//骑行列表
router.get('/riding/list', UserLogin, async (req, res, next) => {
	try {
		const result = await RouteModel.find({ user: req.session._id }).populate(
			'user',
		);
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});

//用户排行
router.get('/riding/list', UserLogin, async (req, res, next) => {
	try {
		//UsersModel
		//关注好友
		const followList = await FriendModel.find({
			me: data.me,
		});
		const userids = followList.map((item) => item.friend);
		const result = await RouteModel.aggregate([
			{
				$match: {
					user: {
						$in: userids,
					},
					status: 1,
				},
			},
			{
				$group: {
					_id: '$user',
					distance_total: { $sum: '$distance' },
					duration_total: { $sum: '$duration' },
				},
			},
		])
			.populate({ path: '_id', model: UsersModel })
			.skip(0)
			.limit(50)
			.sort({ distance_total: 1 });
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
