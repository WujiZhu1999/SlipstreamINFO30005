const home = (req, res) => {
    if (true){//logged in 
        res.send("<h1> logged in home page </h1>");
    } else {
        res.send("<h1> logged out homepage\nWelcome to Slipstream</h1>");
    }
}

module.exports = {
    home,
};