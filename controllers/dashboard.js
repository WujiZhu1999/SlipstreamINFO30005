const mongoose = require("mongoose");
const User = mongoose.model("users");
const Friend = mongoose.model("friends");


const getHomepage = async (req, res) => {

    try{
        var userData = await getStats(req, res);

        var leaderboardData = await getLeaderboard(req, res)
        console.log(leaderboardData)
        res.render("dashboard", {
        title:"Dashboard",
        active: "Home",
        leaderboard: leaderboardData,
        user: userData,
        userName: req.session.user
    })

    }catch(err){
        res.status(400);
        return res.send("Failed when dealing personal information.");
    }
}

async function getStats(req, res) {
    try{
        const user = await User.findOne({"userName":req.session.user});

        return user

    }catch(err){
        res.status(400);
        return "Failure when fetching personal information for main page(dashboard)";
    }
};


async function getLeaderboard(req, res){
    try{
        var _friends = await Friend.find({
            "sender": req.session.user,
            "status": "ACCEPTED"
        });

        _friends += await Friend.find({
            "reciever": req.session.user,
            "status": "ACCEPTED"
        });



        var _list = [];
        for(user of _friends){
            if (user["sender"] == req.session.user){
                _list.push(user["reciever"]);
            } else {
                _list.push(user["sender"]);
            }
        }

        _list.push(req.session.user)

        const _detail = await User.find({
            "userName":{ $in: _list}
        });
        
        
        return _detail;

    }catch(err){
        res.status(400);
        return "Failure when getLeaderboard for friends.";
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
