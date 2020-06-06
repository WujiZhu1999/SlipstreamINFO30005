const mongoose = require('mongoose');
const User = mongoose.model('users');
const Friend = mongoose.model('friends');
const Route = mongoose.model('route');
const Tips = mongoose.model('tips');

//render the home page- dashboard
const getHomepage = async (req, res) => {
	try {
		if (req.session.user) {
			//get user data from MongoDB
			var userData = await getStats(req, res);
			//get leaderboard data from MongoDB
			var leaderboardData = await getLeaderboard(req, res);
			//route data
			var routeData = await getRoute(req, res);
			//Route amount
			var totalRouteAmount = 0;
			var totalRouteAmount_A = 0;

			//historical route
			var distance_array = [0, 0, 0, 0];
			var route_count = [0, 0, 0, 0];
			var i;

			for (route of routeData) {
				totalRouteAmount += route['status'].filter((x) => x == 'COMPLETED')
					.length;
				totalRouteAmount_A += route['status'].length;
				for (i = 0; i < route['status'].length; i++) {
					if (route['status'][i] == 'COMPLETED') {
						if (
							Math.floor(
								Math.abs(new Date() - new Date(route['completed'][i])) /
									(1000 * 3600 * 24),
							) <= 7
						) {
							distance_array[3] += route['distance'];
							route_count[3] += 1;
						} else if (
							Math.floor(
								Math.abs(new Date() - new Date(route['completed'][i])) /
									(1000 * 3600 * 24),
							) <= 14
						) {
							distance_array[2] += route['distance'];
							route_count[2] += 1;
						} else if (
							Math.floor(
								Math.abs(new Date() - new Date(route['completed'][i])) /
									(1000 * 3600 * 24),
							) <= 21
						) {
							distance_array[1] += route['distance'];
							route_count[1] += 1;
						} else if (
							Math.floor(
								Math.abs(new Date() - new Date(route['completed'][i])) /
									(1000 * 3600 * 24),
							) <= 28
						) {
							distance_array[0] += route['distance'];
							route_count[0] += 1;
						}
					}
				}
			}
			const _tip = await Tips.find();
			const _tip_out = await _tip[Math.floor(Math.random() * _tip.length)];

			//render dashboard template
			return res.render('main/dashboard', {
				title: 'Dashboard',
				//always specify these!
				active: 'Home',
				userName: req.session.user,
				leaderboard: leaderboardData,
				routes: routeData,
				routeAmount: totalRouteAmount,
				routeAmount_A: totalRouteAmount_A,
				distance_A: distance_array,
				route_A: route_count,
				tip: _tip_out,
				user: userData,
			});
		} else {
			//if not has login,redirect logout page
			res.render('main/loggedOut');
		}
	} catch (err) {
		return res.render('error', {
			error: 'Server Error: Failed to get dashboard',
			redirect: '/',
		});
	}
};

//support function to dashboard - to get route
async function getRoute(req, res) {
	try {
		const data = await Route.find({
			user: req.session.user,
		});

		return data;
	} catch (err) {
		return res.render('error', {
			error: 'Server Error: Falied to fetch route',
			redirect: '/',
		});
	}
}

//support function to get user data
async function getStats(req, res) {
	try {
		const user = await User.findOne({
			userName: req.session.user,
		});

		return user;
	} catch (err) {
		return res.render('error', {
			error: 'Server Error: Failed to get statistics',
			redirect: '/',
		});
	}
}

//support function to create the leader board
async function getLeaderboard(req, res) {
	try {
		//found all the friends of user
		friends = [];
		var found_friends = await Friend.find({
			sender: req.session.user,
			status: 'ACCEPTED',
		});

		for (i of found_friends) {
			friends.push(i);
		}

		found_friends = await Friend.find({
			receiver: req.session.user,
			status: 'ACCEPTED',
		});

		for (i of found_friends) {
			friends.push(i);
		}

		var friend_list = [];
		for (user of friends) {
			if (user.sender == req.session.user) {
				friend_list.push(user.receiver);
			} else {
				friend_list.push(user.sender);
			}
		}

		friend_list.push(req.session.user);

		//from the friends found, sort their achievement in biking
		details = [];
		for (user of friend_list) {
			details.push(await User.findOne({ userName: user }));
		}
		details.sort(
			(a, b) => b['data']['totalDistance'] - a['data']['totalDistance'],
		);

		return details;
	} catch (err) {
		return res.render('error', {
			error: 'Server Error: Failed to get leaderboard',
			redirect: '/',
		});
	}
}
//try nodemon
/*

//Ranks a user's friends and themselves on the totalDistance cycled
function getLeaderboard(req) {
    //title for the leaderbaord
    var output = "<h1 align='center'>Leaderboard</h1>";

    //gets a list of usernames that should be ranked
    const userName = req.session.user;
    //const userName = "hello"

    const user = users.find((user) => user.userName === userName);
    
    var userList = friendsController.getFriends(userName);
    userList.push(user["userName"]);

    //an array of distances for the users ranked
    var totalDistanceArray = [];
    
    for(n in userList){
        const user = users.find((user) => user.userName === userList[n]);
        totalDistanceArray.push(user["data"]["totalDistance"]);
    }

    sortedDistance = totalDistanceArray.sort(function(a, b){return b-a});
    //sortedDistance = sortedDistance.reverse();

   var ranking = 0

   if(sortedDistance.length < displaynum){displaynum=sortedDistance.length}
   // Creating the output for the leaderboard based on sortedDistance rankings 
    for(distance in sortedDistance){
        var userIndex = 0;

        if (userIndex>=displaynum){
            break;
        }

        for(userNum in userList){
                
            const user = users.find((user) => user.userName === userList[userNum]);

            if (sortedDistance[distance] == user.data.totalDistance){

                    ranking += 1;
                    // const addUser = "<br>" + ranking + ". " + user.name + " DISTANCE: " + user.data.totalDistance;
                    // output += addUser;
                    output += "<dt>"+ ranking + "</dt> <dd>"+ user.name +"</dd><dd> DISTANCE: "+ user.data.totalDistance +"</dd><dd>"+user.data.energySaved+" KJ energy Saved </dd>"
                    + "<dd>"+ user.data.carbonSaved + " KG carbon Saved </dd>" + "<dd>"+ user.data.streak + " days Streak </dd>"
                    userList.splice((userIndex), 1); 
                    break;      
            }

            else{

                userIndex += 1;
            }
                
        }
    }
    output = '<style> .divcss5{width:300px;height:600px;border:2px solid #000} dt{border-top:2px solid #000}</style><div class="divcss5"><dl id="Leaderboard"></dl></div>\
    <script>document.getElementById("Leaderboard").innerHTML="'+ output +'";</script>'
    return output
} */

module.exports = {
	getHomepage,
};
