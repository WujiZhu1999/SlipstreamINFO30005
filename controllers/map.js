const getMap = (req, res) => {
    res.send("<h1>map</h1>");
}

const getMapRoute = (req, res) => {
    if (req.query.to != null && req.query.from != null){
        res.send("<h1>route from " + req.query.to + " to " + req.query.from + "</h1>");
    } else {
        res.send("no to or from");
    }
}

module.exports = {
    getMap,
    getMapRoute
}