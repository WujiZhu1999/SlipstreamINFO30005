const dashboard = require("../models/dashboard");
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
    var page = '<div><h1>Leaderboard</h1><dl id="Leaderboard"></dl></div><script>document.getElementById("Leaderboard").innerHTML="'+ content +'";</script>'
    return page;
}

const home = (req, res) => {
    if (true){//logged in 
        res.send(getdata(dashboard.length));
    } else {
        res.send("<h1> logged out homepage\nWelcome to Slipstream</h1>");
    }
}

module.exports = {
    home,
};