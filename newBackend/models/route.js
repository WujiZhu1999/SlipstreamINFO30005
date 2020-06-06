const mongoose = require('mongoose');
const routeSchema = new mongoose.Schema(
	{
		user: String,
		origin: String,
		destination: String,
		distance: Number,
		duration: Number,
		turns: Number,
		response: Object,
		completed: Array,
		status: Array,
		totalTrial: Number,
	},
	{ versionKey: false },
);

const Route = mongoose.model('route', routeSchema, 'route');
module.exports = Route;
