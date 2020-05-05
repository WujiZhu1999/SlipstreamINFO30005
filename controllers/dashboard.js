const users = require("../models/users.js");
const friendsController = require("../controllers/friends.js");
const displaynum = 2 //display number

const getHomepage = (req, res) => {
    if (req.session.user != null){//logged in 
        
        output = getStats(req);
        output += "<br><br>"
        output += getLeaderboard(req);
        res.send(output);

        
    } else {
        res.render("login",{
            title: "Login"
        });
    }
}

function getStats(req) {
    // req.session.user = "hello";
    const userName = req.session.user;
    // check if the userName is valid

    // find the data of the user in the database
    const user = users.find((user) => user.userName === userName);
    
    // construct the output html string
    output = "<dt>Your stats</dt> <dd>"+ user.name +"</dd><dd> DISTANCE: "+ user.data.totalDistance +"</dd><dd>"+user.data.energySaved+" KJ energy Saved </dd>"
                    + "<dd>"+ user.data.carbonSaved + " KG carbon Saved </dd>" + "<dd>"+ user.data.streak + " days Streak </dd>"
    return output;
};

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
}

module.exports = {
    getHomepage
};
