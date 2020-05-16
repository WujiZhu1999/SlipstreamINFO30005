const mongoose = require("mongoose");
const User = mongoose.model("users");
const Friend = mongoose.model("friends");


const getHomepage = async (req, res) => {

    try {
        if (req.session.user){
            //get user data from MongoDB
            var userData = await getStats(req, res);
            //get leaderboard data from MongoDB
            var leaderboardData = await getLeaderboard(req, res)
            //render dashboard template
            res.render("main/dashboard", {
                title: "Dashboard",
                //always specify these!
                active: "Home",
                userName: req.session.user,
                leaderboard: leaderboardData,
                user: userData
            })
        } else {
            //if not has login,redirect logout page
            res.render("main/loggedOut")
        }
        

    } catch (err) {
        return res.render("error", {
            error: "Server Error: Failed to get dashboard",
            redirect: "/" 
        });
    }
}

async function getStats(req, res) {
    try {
        const user = await User.findOne({
            "userName": req.session.user
        });

        return user

    } catch (err) {
        return res.render("error", {
            error: "Server Error: Failed to get statistics",
            redirect: "/" 
        });
    }
};


async function getLeaderboard(req, res) {

    try {
        friends = []
        var _friends = await Friend.find({
            "sender": req.session.user,
            "status": "ACCEPTED"
        });

        for (i of _friends){
            friends.push(i)
        }

        _friends = await Friend.find({
            "receiver": req.session.user,
            "status": "ACCEPTED"
        });

        for (i of _friends){
            friends.push(i)
        }


        var _list = [];
        for(user of friends){
            if (user.sender == req.session.user){
                _list.push(user.receiver);
            } else {
                _list.push(user.sender);
            }
        }

        _list.push(req.session.user)


        details = []
        for (user of _list){
            details.push(await User.findOne({"userName":user}));
        }


        return details;

    } catch (err) {
        return res.render("error", {
            error: "Server Error: Failed to get leaderboard",
            redirect: "/" 
        });
    }
}

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
    getHomepage
};