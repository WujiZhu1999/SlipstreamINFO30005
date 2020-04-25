//Author： Lijun Wang
//StudentID：904796
const dashboard = require("../models/dashboard"); 
const users = require("../models/users.js");
const friendsController = require("../controllers/friends.js");

function getdata(displaynum){    
    var x=1;
    var content="";
    if(displaynum > dashboard.length){ displaynum=dashboard.length} //display number
    for (var i=0;i<displaynum;i++){
        var index =i+1;
        content += "<dt>"+ index + "</dt> <dd>"+ dashboard[i].user +"</dd>";
        content += "<dd>"+ dashboard[i].energySaved + " KJ energy Saved </dd>";
        content += "<dd>"+ dashboard[i].carbonSaved + " KG carbon Saved </dd>";
        content += "<dd>"+ dashboard[i].streak + " days Streak </dd>";
        
    }
    var page = '<style> .divcss5{width:300px;height:300px;border:2px solid #000} dt{border-top:2px solid #000}</style><div class="divcss5"><h1 align="center">Leaderboard</h1><dl id="Leaderboard"></dl></div>\
    <script>document.getElementById("Leaderboard").innerHTML="'+ content +'";</script>'
    return page;  
}

const home = (req, res) => {
    if (req.session.user != null){//logged in 
        res.send(getdata(dashboard.length));  
    } else {
        res.send("<h1> logged out homepage<br>Welcome to Slipstream</h1>");
    }
}

//Ranks a user's friends and themselves on the totalDistance cycled
const getLeaderboard = (req,res) => {
    //title for the leaderbaord
    var output = "<h1>Leaderboard</h1>";

    //gets a list of usernames that should be ranked
    const userName = req.params.userName;
    if( users.find((user) => user.userName === userName) == false){
        res.send("not valid user")
        return;
    }

    const user = users.find((user) => user.userName === userName);
    
    var userList = friendsController.getFriends(userName);
    userList.push(user["userName"]);
    const lengthFriendsList = userList.size;

    //an array of distances for the users ranked
    var totalDistanceArray = [];
    
    for(n in userList){
        const user = users.find((user) => user.userName === userList[n]);
        totalDistanceArray.push(user["data"]["totalDistance"]);
    }

    sortedDistance = totalDistanceArray.sort();
    sortedDistance = sortedDistance.reverse();

   var ranking = 0
    for(distance in sortedDistance){
        var userIndex = 0;

        for(userNum in userList){

            const user = users.find((user) => user.userName === userList[userNum]);

            if (distance = user.data.totalDistance){

                    ranking += 1;
                    const addUser = "<br>" + ranking + ". " + user.userName + " DISTANCE: " + user.data.totalDistance;
                    output += addUser;

                    userList.splice((userIndex), 1); 
                    break;
                    
            }

            else{
                userIndex += 1;
            }
                
        }
    }
    res.send(output);
}

module.exports = {
    home,
    getLeaderboard
};
