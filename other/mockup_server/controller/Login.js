const express = require('express');
const router = express.Router();
const UsersModel = require('../model/Users');
router.post('/login', async (req, res, next) => {
	try {
		const { userName, password } = req.body;
		const existUser = await UsersModel.findOne({ userName, password });
		if (!existUser) {
			res.status(401).json({
				code: 401,
				message: 'Username or password incorrect',
			});
			return;
		}
		req.session.user = existUser;
		res.status(200).json(existUser);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
